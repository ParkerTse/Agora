package com.winterproject.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Wish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category; 
    private Double latitude;
    private Double longitude;
    
    // NO default value. The user MUST decide.
    private Double radiusMeters; 

    public Wish() {}

    public Wish(String category, Double latitude, Double longitude, Double radiusMeters) {
        this.category = category;
        this.latitude = latitude;
        this.longitude = longitude;
        this.radiusMeters = radiusMeters;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public String getCategory() { return category; }
    public Double getLatitude() { return latitude; }
    public Double getLongitude() { return longitude; }
    public Double getRadiusMeters() { return radiusMeters; }
}