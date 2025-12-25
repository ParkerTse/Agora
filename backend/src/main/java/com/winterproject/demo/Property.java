package com.winterproject.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Property {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String address;
    private Double price;
    private String description;
    private Double latitude;
    private Double longitude;

    public Property() {}

    public Property(String address, Double price, Double latitude, Double longitude, String description) {
        this.address = address;
        this.price = price;
        this.latitude = latitude;
        this.longitude = longitude;
        this.description = description;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public String getAddress() { return address; }
    public Double getPrice() { return price; }
    public String getDescription() { return description; }
    public Double getLatitude() { return latitude; }
    public Double getLongitude() { return longitude; }

    public void setAddress(String address) { this.address = address; }
    public void setPrice(Double price) { this.price = price; }
    
    // THE IMPORTANT FIX:
    public void setLatitude(Double latitude) { this.latitude = latitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }
    public void setDescription(String description) { this.description = description; }
}