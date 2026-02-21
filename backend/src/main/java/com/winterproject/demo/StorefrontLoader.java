package com.winterproject.demo;

import com.opencsv.CSVReaderHeaderAware;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.HashSet; // <--- NEW IMPORT
import java.util.List;
import java.util.Map;
import java.util.Set;     // <--- NEW IMPORT

@Component
public class StorefrontLoader implements CommandLineRunner {

    private final PropertyRepository propertyRepository;

    public StorefrontLoader(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public void run(String... args) {
        try {
            System.out.println("--- StorefrontLoader Started ---");

            String filePath = "/home/parker/winterproject/backend/src/main/resources/Storefronts_Reported_Vacant_or_Not_20251228.csv";
            File file = new File(filePath);

            if (!file.exists()) {
                System.out.println("⚠️ ERROR: File not found at: " + filePath);
                return;
            }

            // --- 1. TRACK SEEN ADDRESSES ---
            // This prevents adding the same address twice
            Set<String> seenAddresses = new HashSet<>(); 

            try (CSVReaderHeaderAware reader = new CSVReaderHeaderAware(new FileReader(file))) {
                List<Property> batch = new ArrayList<>();
                Map<String, String> values;

                while ((values = reader.readMap()) != null) {
                    
                    // Filter: Only "YES"
                    String vacantStatus = values.get("Vacant on 12/31");
                    if (vacantStatus == null || !vacantStatus.equalsIgnoreCase("YES")) {
                        continue; 
                    }

                    // --- 2. CHECK FOR DUPLICATES ---
                    String address = values.get("Property Street Address or Storefront Address");
                    if (address == null || seenAddresses.contains(address)) {
                        continue; // Skip if we already added this address!
                    }
                    seenAddresses.add(address); // Mark as seen
                    // -------------------------------

                    Property p = new Property();
                    p.setAddress(address);
                    
                    String activity = values.get("Primary Business Activity");
                    String neighborhood = values.get("NTA Neighborhood");
                    p.setDescription("Activity: " + (activity != null ? activity : "Unknown") + 
                                     " | Area: " + (neighborhood != null ? neighborhood : "Unknown"));
                    
                    p.setPrice(0.0);
                    p.setSquareFeet(0);

                    // Coordinate Parsing
                    String latStr = values.get("Latitude");
                    String lonStr = values.get("Longitude");

                    if (latStr != null && !latStr.isEmpty() && lonStr != null && !lonStr.isEmpty()) {
                        try {
                            p.setLatitude(Double.parseDouble(latStr));
                            p.setLongitude(Double.parseDouble(lonStr));
                        } catch (NumberFormatException e) {
                            continue; 
                        }
                    } else {
                        continue; 
                    }

                    batch.add(p);

                    if (batch.size() >= 500) {
                        propertyRepository.saveAll(batch);
                        batch.clear();
                        System.out.println("Saved batch...");
                    }
                }

                if (!batch.isEmpty()) {
                    propertyRepository.saveAll(batch);
                }
                System.out.println("--- Import SUCCESS! ---");
            }

        } catch (Exception e) {
            System.err.println("IMPORT FAILED: " + e.getMessage());
            e.printStackTrace();
        }
    }
}