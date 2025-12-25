package com.winterproject.demo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import java.util.List;

public interface WishRepository extends JpaRepository<Wish, Long> {

    // "Find all wishes where the distance to the building is LESS THAN the wish's radius"
    @Query("SELECT w FROM Wish w WHERE " +
           "(6371 * acos(cos(radians(:lat)) * cos(radians(w.latitude)) * " +
           "cos(radians(w.longitude) - radians(:lon)) + " +
           "sin(radians(:lat)) * sin(radians(w.latitude)))) * 1000 < w.radiusMeters")
    List<Wish> findWishesCoveringLocation(@Param("lat") Double lat, @Param("lon") Double lon);
}