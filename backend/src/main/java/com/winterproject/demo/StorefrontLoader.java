package com.winterproject.demo; // <--- This MUST match your folder path
import com.opencsv.CSVReaderHeaderAware;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Component
public class StorefrontLoader implements CommandLineRunner {

    private final PropertyRepository propertyRepository;

    public StorefrontLoader(PropertyRepository propertyRepository) {
        this.propertyRepository = propertyRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        if (propertyRepository.count() > 0) {
            System.out.println("Data already exists. Skipping import.");
            return;
        }
        // UPDATE THIS PATH to where your file actually is!
        String filePath = "/home/parker/winterproject/backend/src/main/resources/Storefronts_Reported_Vacant_or_Not_20251228.csv";
        
        try (CSVReaderHeaderAware reader = new CSVReaderHeaderAware(new FileReader(filePath))) {
            List<Property> batch = new ArrayList<>();
            Map<String, String> values;

            while ((values = reader.readMap()) != null) {
                Property p = new Property();

                // 1. MAP THE COLUMNS
                // CSV Header: "Property Street Address or Storefront Address"
                p.setAddress(values.get("Property Street Address or Storefront Address"));

                // CSV Header: "Primary Business Activity" -> Use as description
                String activity = values.get("Primary Business Activity");
                String neighborhood = values.get("NTA Neighborhood");
                p.setDescription("Activity: " + activity + " | Area: " + neighborhood);

                // 2. HANDLE MISSING DATA (Set defaults)
                p.setPrice(0.0); // CSV doesn't have price
                p.setSquareFeet(0); // CSV doesn't have size

                // 3. PARSE LAT/LONG SAFEGUARD
                try {
                    p.setLatitude(Double.parseDouble(values.get("Latitude")));
                    p.setLongitude(Double.parseDouble(values.get("Longitude")));
                } catch (NumberFormatException e) {
                    continue; // Skip rows with bad/missing coordinates
                }

                batch.add(p);

                // 4. BATCH SAVING (Crucial for speed)
                if (batch.size() >= 500) {
                    propertyRepository.saveAll(batch);
                    batch.clear();
                    System.out.println("Saved 500 rows...");
                }
            }

            // Save any leftovers
            if (!batch.isEmpty()) {
                propertyRepository.saveAll(batch);
            }
            System.out.println("Import Complete!");
        }
    }
}