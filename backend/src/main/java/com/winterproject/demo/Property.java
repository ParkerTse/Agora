package com.winterproject.demo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Property {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique=true)
    private String address;
    private Double price;
    private String description;
    private Double latitude;
    private Double longitude;
    private Integer squareFeet;

    public Property() {}

    public Property(String address, Double price, Double latitude, Double longitude, Integer squareFeet, String description) {
        this.address = address;
        this.price = price;
        this.latitude = latitude;
        this.longitude = longitude;
        this.squareFeet = squareFeet;
        this.description = description;
    }

    // Getters and Setters
    public Long getId() { return id; }
    public String getAddress() { return address; }
    public Double getPrice() { return price; }
    public String getDescription() { return description; }
    public Double getLatitude() { return latitude; }
    public Double getLongitude() { return longitude; }
    public Integer getSquareFeet() { return squareFeet; }

    public void setAddress(String address) { this.address = address; }
    public void setPrice(Double price) { this.price = price; }
    public void setLatitude(Double latitude) { this.latitude = latitude; }
    public void setLongitude(Double longitude) { this.longitude = longitude; }
    public void setDescription(String description) { this.description = description; }
    public void setSquareFeet(Integer squareFeet) { this.squareFeet = squareFeet; }
}