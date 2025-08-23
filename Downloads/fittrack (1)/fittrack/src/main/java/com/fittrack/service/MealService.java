package com.fittrack.service;

import com.fittrack.model.Meal;
import com.fittrack.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealService {
    @Autowired
    private MealRepository mealRepository;

    public Meal saveMeal(Meal meal) {
        return mealRepository.save(meal);
    }

    public List<Meal> getMealsByUser(Long userId) {
        return mealRepository.findByUserId(userId);
    }

    public void deleteMeal(Long id) {
        mealRepository.deleteById(id);
    }
}
