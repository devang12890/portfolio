package com.fittrack.controller;

import com.fittrack.service.DashboardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/dashboard")
public class DashboardController {

    @Autowired
    private DashboardService dashboardService;

    @GetMapping("/user/{userId}")
    public Map<String, Integer> getSummary(@PathVariable Long userId) {
        return dashboardService.getDashboardSummary(userId);
    }
}
