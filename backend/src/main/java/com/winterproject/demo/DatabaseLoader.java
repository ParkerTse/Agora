package com.winterproject.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DatabaseLoader {

 @Bean
    CommandLineRunner initDatabase(PropertyRepository propRepo, WishRepository wishRepo) {
        return args -> {
        // Only run this if the database is empty!
            if (propRepo.count() == 0) {
            
            // --- SUPPLY (The Buildings) ---
                propRepo.save(new Property("Empire State", 3500000.0, 40.7484, -73.9857, "Midtown"));
                propRepo.save(new Property("Freedom Tower", 4000000.0, 40.7127, -74.0134, "Downtown"));

            // --- DEMAND (The Wishes) ---
                wishRepo.save(new Wish("Gym", 40.7484, -73.9857, 500.0)); 
                wishRepo.save(new Wish("Bakery", 40.7484, -73.9857, 10000.0));

                System.out.println("Default data added.");
            }
    };
    }
}