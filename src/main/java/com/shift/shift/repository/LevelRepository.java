package com.shift.shift.repository;

import com.shift.shift.domain.Level;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LevelRepository extends JpaRepository<Level, Long> {
    List<Level> findByTeamId(Long teamId);
}
