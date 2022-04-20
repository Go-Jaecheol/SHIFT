package com.shift.shift.repository;

import com.shift.shift.domain.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {
    List<Seat> findByLevelId(Long levelId);
}
