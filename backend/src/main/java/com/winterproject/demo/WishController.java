package com.winterproject.demo;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.List;

@RestController
@CrossOrigin
public class WishController {

    private final WishRepository wishRepository;

    public WishController(WishRepository wishRepository) {
        this.wishRepository = wishRepository;
    }

    // 1. GET ALL WISHES (For the Map to draw Blue Circles)
    // This was missing!
    @GetMapping("/wishes")
    public List<Wish> getAllWishes() {
        return wishRepository.findAll();
    }

    // 2. CHECK DEMAND (For Landlords / Calculation)
    @GetMapping("/wishes-near")
    public List<Wish> getWishesForBuilding(@RequestParam Double lat, @RequestParam Double lon) {
        return wishRepository.findWishesCoveringLocation(lat, lon);
    }

    // 3. MAKE A WISH (For Users)
    @PostMapping("/wish")
    public Wish createWish(@RequestBody Wish wish) {
        return wishRepository.save(wish);
    }

    @GetMapping("/demand-summary")
    public Map<String, Long> getDemandSummary(@RequestParam Double lat, @RequestParam Double lon) {
    List<Wish> nearbyWishes = wishRepository.findWishesCoveringLocation(lat, lon);
    // This groups the list by category and counts them
    return nearbyWishes.stream()
        .collect(Collectors.groupingBy(Wish::getCategory, Collectors.counting()));
}
}