package com.fittrack.service;

import com.fittrack.repository.MealRepository;
import com.fittrack.repository.WaterRepository;
import com.fittrack.repository.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class SummaryService {

    @Autowired private MealRepository mealRepository;
    @Autowired private WorkoutRepository workoutRepository;
    @Autowired private WaterRepository waterRepository;

    public Map<String, List<Integer>> getWeeklySummary(Long userId) {
        // Dummy static values — replace with real logic when date-wise filtering is needed
        Map<String, List<Integer>> summary = new HashMap<>();
        summary.put("meals", Arrays.asList(500, 600, 700, 800, 650, 700, 600));
        summary.put("workouts", Arrays.asList(100, 120, 150, 110, 130, 140, 100));
        summary.put("water", Arrays.asList(5, 6, 7, 6, 5, 6, 7));
        return summary;
    }
}
