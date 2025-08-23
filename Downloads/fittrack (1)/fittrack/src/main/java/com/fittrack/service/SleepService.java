package com.fittrack.service;

import com.fittrack.model.Sleep;
import com.fittrack.repository.SleepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SleepService {
    @Autowired
    private SleepRepository sleepRepository;

    public Sleep saveSleep(Sleep sleep) {
        return sleepRepository.save(sleep);
    }

    public List<Sleep> getSleepByUser(Long userId) {
        return sleepRepository.findByUserId(userId);
    }

    public void deleteSleep(Long id) {
        sleepRepository.deleteById(id);
    }
}
