package com.shift.shift.service;

import com.shift.shift.domain.Level;
import com.shift.shift.domain.Seat;
import com.shift.shift.repository.LevelRepository;
import com.shift.shift.repository.SeatRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class SeatService {
    private final SeatRepository seatRepository;
    private final LevelRepository levelRepository;

    @Transactional
    public List<Seat> seatList(String levelName) {
        Level level = levelRepository.findByLevelName(levelName);
        return seatRepository.findByLevelId(level.getLevelId());
    }
}
