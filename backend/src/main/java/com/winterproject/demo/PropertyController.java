package com.winterproject.demo;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000") // Allow the frontend to talk to this
public class PropertyController {

    private final PropertyRepository repository;

    // --- CONSTRUCTOR INJECTION (Connects to Database) ---
    public PropertyController(PropertyRepository repository) {
        this.repository = repository;
    }

    // --- 1. SEARCH ENDPOINT (For the Map) ---
    // This keeps your map working by finding properties nearby.
    // Note: Ensure 'findWithinRadius' matches the method name in your PropertyRepository.
    // If you named it 'searchProperties' or something else, update the name below!
    @GetMapping("/search")
    public List<Property> search(@RequestParam double lat, @RequestParam double lon, @RequestParam double radius) {
        // If your repository uses a different method name, change it here.
        // For now, I'll use a likely name for your project:
        return repository.findWithinRadius(lat, lon, radius); 
    }

    // --- 2. CREATE ENDPOINT (For the Landlord Page) ---
    // This is the new part you were trying to add.
    @PostMapping("/property")
    public Property createProperty(@RequestBody Property newProperty) {
        // Validation: If no coordinates provided, mock them near NYC
        if (newProperty.getLatitude() == 0 || newProperty.getLongitude() == 0) {
            newProperty.setLatitude(40.7484 + (Math.random() * 0.01));
            newProperty.setLongitude(-73.9857 + (Math.random() * 0.01));
        }
        
        return repository.save(newProperty);
    }
}