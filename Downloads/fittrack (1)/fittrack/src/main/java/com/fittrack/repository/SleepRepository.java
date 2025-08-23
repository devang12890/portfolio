package com.fittrack.repository;

import com.fittrack.model.Sleep;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SleepRepository extends JpaRepository<Sleep, Long> {
    List<Sleep> findByUserId(Long userId);
}
