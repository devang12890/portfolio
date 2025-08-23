package com.fittrack.controller;

import com.fittrack.model.Sleep;
import com.fittrack.service.SleepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/sleep")
public class SleepController {

    @Autowired
    private SleepService sleepService;

    @PostMapping
    public ResponseEntity<Sleep> addSleep(@RequestBody Sleep sleep) {
        return ResponseEntity.ok(sleepService.saveSleep(sleep));
    }

    @GetMapping("/user/{userId}")
    public List<Sleep> getSleepLogs(@PathVariable Long userId) {
        return sleepService.getSleepByUser(userId);
    }

    @DeleteMapping("/{id}")
    public void deleteSleep(@PathVariable Long id) {
        sleepService.deleteSleep(id);
    }
}
