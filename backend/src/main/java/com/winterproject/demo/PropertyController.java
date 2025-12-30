package com.winterproject.demo; // Make sure package is correct

import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/properties")
@CrossOrigin(origins = "http://localhost:3000")
public class PropertyController {

    private final PropertyRepository repository;

    // --- CONSTRUCTOR INJECTION ---
    public PropertyController(PropertyRepository repository) {
        this.repository = repository;
    }

    // --- 1. VIEWPORT SEARCH (The "Redfin" Style) ---
    // This handles both cases: specific area OR everything
    @GetMapping
    public List<Property> getProperties(
            @RequestParam(required = false) Double minLat,
            @RequestParam(required = false) Double maxLat,
            @RequestParam(required = false) Double minLng,
            @RequestParam(required = false) Double maxLng) {

        // If the map sends coordinates, we filter!
        if (minLat != null && maxLat != null && minLng != null && maxLng != null) {
            Pageable limit = PageRequest.of(0, 500);
            return repository.findByLatitudeBetweenAndLongitudeBetween(
                minLat, maxLat, minLng, maxLng, limit
            );
        }

        // SAFETY CHECK: If no coordinates are sent (initial load), 
        // returning repository.findAll() will try to load 500,000 rows and CRASH.
        // It is safer to return an empty list or limit it.
        return List.of(); 
    }

    // --- 2. LEGACY SEARCH (Optional: Keep only if you use it) ---
    @GetMapping("/search")
    public List<Property> search(@RequestParam double lat, @RequestParam double lon, @RequestParam double radius) {
        // Only keep this if "findWithinRadius" exists in your Repository interface
        return repository.findWithinRadius(lat, lon, radius); 
    }

    // --- 3. CREATE PROPERTY (For Landlord) ---
    @PostMapping
    public Property createProperty(@RequestBody Property newProperty) {
        // Auto-fix coordinates if they are missing (0,0)
        if (newProperty.getLatitude() == 0 || newProperty.getLongitude() == 0) {
            newProperty.setLatitude(40.7484 + (Math.random() * 0.01));
            newProperty.setLongitude(-73.9857 + (Math.random() * 0.01));
        }
        return repository.save(newProperty);
    }
}