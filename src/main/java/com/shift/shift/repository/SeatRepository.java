package com.shift.shift.repository;

import com.shift.shift.domain.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {
    List<Seat> findByLevelId(Long levelId);
    List<Seat> findByLevelIdAndSection(Long levelId, String section);
    List<Seat> findByLevelIdAndSectionAndCol(Long levelId, String section, String col);
    List<Seat> findByLevelIdAndSectionAndNum(Long levelId, String section, String num);
    List<Seat> findByLevelIdAndSectionAndColAndNum(Long levelId, String section, String col, String num);
    List<Seat> findByLevelIdAndCol(Long levelId, String col);
    List<Seat> findByLevelIdAndNum(Long levelId, String num);
    List<Seat> findByLevelIdAndColAndNum(Long levelId, String col, String num);
}
