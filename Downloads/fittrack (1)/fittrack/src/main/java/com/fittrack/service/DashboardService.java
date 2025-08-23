package com.fittrack.service;

import com.fittrack.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class DashboardService {

    @Autowired private MealRepository mealRepository;
    @Autowired private WorkoutRepository workoutRepository;
    @Autowired private WaterRepository waterRepository;
    @Autowired private SleepRepository sleepRepository;

    public Map<String, Integer> getDashboardSummary(Long userId) {
        int totalCalories = mealRepository.findByUserId(userId).stream().mapToInt(m -> m.getCalories()).sum();
        int totalBurned = workoutRepository.findByUserId(userId).stream().mapToInt(w -> w.getCaloriesBurned()).sum();
        int totalWater = waterRepository.findByUserId(userId).stream().mapToInt(w -> w.getGlasses()).sum();
        int totalSleep = sleepRepository.findByUserId(userId).stream().mapToInt(s -> s.getHours()).sum();

        Map<String, Integer> data = new HashMap<>();
        data.put("caloriesConsumed", totalCalories);
        data.put("caloriesBurned", totalBurned);
        data.put("glassesDrank", totalWater);
        data.put("sleepHours", totalSleep);

        return data;
    }
}
