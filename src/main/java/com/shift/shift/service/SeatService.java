package com.shift.shift.service;

import com.shift.shift.domain.Level;
import com.shift.shift.domain.Seat;
import com.shift.shift.domain.SeatFilterSpecification;
import com.shift.shift.dto.SeatFilterRequest;
import com.shift.shift.repository.LevelRepository;
import com.shift.shift.repository.SeatRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.jpa.domain.Specification;
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

    @Transactional
    public List<Seat> seatFilterList(String levelName, SeatFilterRequest seatFilterRequest) {
        Level level = levelRepository.findByLevelName(levelName);
        String section = seatFilterRequest.getSection();
        String row = seatFilterRequest.getRow();
        String num = seatFilterRequest.getNum();

        Specification<Seat> spec = Specification.where(SeatFilterSpecification.equalLevelId(level.getLevelId()));
        if(!section.equals("All") && !section.equals("")) {
            spec = spec.and(SeatFilterSpecification.equalSection(section));
        }
        if(!row.equals("")) {
            spec = spec.and(SeatFilterSpecification.equalRow(row));
        }
        if(!num.equals("")) {
            spec = spec.and(SeatFilterSpecification.equalNum(num));
        }

        return seatRepository.findAll(spec);
    }
}
