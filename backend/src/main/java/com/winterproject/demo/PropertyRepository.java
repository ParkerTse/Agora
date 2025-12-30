package com.winterproject.demo;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface PropertyRepository extends JpaRepository<Property, Long> {

    // --- THIS IS THE MISSING PART ---
    // It teaches the database how to find things within 'radius' km
    @Query("SELECT p FROM Property p WHERE " +
           "(6371 * acos(cos(radians(:lat)) * cos(radians(p.latitude)) * " +
           "cos(radians(p.longitude) - radians(:lon)) + " +
           "sin(radians(:lat)) * sin(radians(p.latitude)))) < :radius")
    List<Property> findWithinRadius(
        @Param("lat") double lat, 
        @Param("lon") double lon, 
        @Param("radius") double radius
    );

    // This "magic" method name tells Spring exactly what SQL to write automatically
    List<Property> findByLatitudeBetweenAndLongitudeBetween(
        Double minLat, Double maxLat, 
        Double minLng, Double maxLng,
        Pageable pageable
    );
}