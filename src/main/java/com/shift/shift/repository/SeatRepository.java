package com.shift.shift.repository;

import com.shift.shift.domain.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {
    List<Seat> findByLevelId(Long levelId);
    List<Seat> findByLevelIdAndSection(Long levelId, String section);
    List<Seat> findByLevelIdAndSectionAndRow(Long levelId, String section, String row);
    List<Seat> findByLevelIdAndSectionAndNum(Long levelId, String section, String num);
    List<Seat> findByLevelIdAndSectionAndRowAndNum(Long levelId, String section, String row, String num);
    List<Seat> findByLevelIdAndRow(Long levelId, String row);
    List<Seat> findByLevelIdAndNum(Long levelId, String num);
    List<Seat> findByLevelIdAndRowAndNum(Long levelId, String row, String num);
}
