package com.fittrack.controller;

import com.fittrack.model.Meal;
import com.fittrack.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/meals")
public class MealController {

    @Autowired
    private MealService mealService;

    @PostMapping
    public ResponseEntity<Meal> addMeal(@RequestBody Meal meal) {
        return ResponseEntity.ok(mealService.saveMeal(meal));
    }

    @GetMapping("/user/{userId}")
    public List<Meal> getMeals(@PathVariable Long userId) {
        return mealService.getMealsByUser(userId);
    }

    @DeleteMapping("/{id}")
    public void deleteMeal(@PathVariable Long id) {
        mealService.deleteMeal(id);
    }
}
