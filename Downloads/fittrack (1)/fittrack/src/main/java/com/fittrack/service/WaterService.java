package com.fittrack.service;

import com.fittrack.model.Water;
import com.fittrack.repository.WaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WaterService {
    @Autowired
    private WaterRepository waterRepository;

    public Water saveWater(Water water) {
        return waterRepository.save(water);
    }

    public List<Water> getWaterByUser(Long userId) {
        return waterRepository.findByUserId(userId);
    }

    public void deleteWater(Long id) {
        waterRepository.deleteById(id);
    }
}
