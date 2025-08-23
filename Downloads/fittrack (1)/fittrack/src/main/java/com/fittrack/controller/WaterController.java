package com.fittrack.controller;

import com.fittrack.model.Water;
import com.fittrack.service.WaterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/water")
public class WaterController {

    @Autowired
    private WaterService waterService;

    @PostMapping
    public ResponseEntity<Water> addWater(@RequestBody Water water) {
        return ResponseEntity.ok(waterService.saveWater(water));
    }

    @GetMapping("/user/{userId}")
    public List<Water> getWaterLogs(@PathVariable Long userId) {
        return waterService.getWaterByUser(userId);
    }

    @DeleteMapping("/{id}")
    public void deleteWater(@PathVariable Long id) {
        waterService.deleteWater(id);
    }
}
