package com.fittrack.controller;

import com.fittrack.service.SummaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
import java.util.List;

@RestController
@RequestMapping("/api/summary")
public class SummaryController {

    @Autowired
    private SummaryService summaryService;

    @GetMapping("/weekly/{userId}")
    public Map<String, List<Integer>> getWeekly(@PathVariable Long userId) {
        return summaryService.getWeeklySummary(userId);
    }
}
