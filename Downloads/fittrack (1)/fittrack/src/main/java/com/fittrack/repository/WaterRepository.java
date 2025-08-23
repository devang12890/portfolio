package com.fittrack.repository;

import com.fittrack.model.Water;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface WaterRepository extends JpaRepository<Water, Long> {
    List<Water> findByUserId(Long userId);
}
