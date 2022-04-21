package com.shift.shift.service;

import com.shift.shift.domain.Level;
import com.shift.shift.domain.Seat;
import com.shift.shift.dto.SeatFilterRequest;
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

    @Transactional
    public List<Seat> seatFilterList(String levelName, SeatFilterRequest seatFilterRequest) {
        Level level = levelRepository.findByLevelName(levelName);
        String section = seatFilterRequest.getSection();
        String col = seatFilterRequest.getCol();
        String num = seatFilterRequest.getNum();

        if(section.equals("All")) {
            if(!col.equals("") && !num.equals("")) {
                return seatRepository.findByLevelIdAndColAndNum(level.getLevelId(), col, num);
            } else if(!col.equals("")) {
                return seatRepository.findByLevelIdAndCol(level.getLevelId(), col);
            } else if(!num.equals("")) {
                return seatRepository.findByLevelIdAndNum(level.getLevelId(), num);
            } else {
                return seatRepository.findByLevelId(level.getLevelId());
            }
        } else {
            if(!col.equals("") && !num.equals("")) {
                return seatRepository.findByLevelIdAndSectionAndColAndNum(level.getLevelId(), section, col, num);
            } else if(!col.equals("")) {
                return seatRepository.findByLevelIdAndSectionAndCol(level.getLevelId(), section, col);
            } else if(!num.equals("")) {
                return seatRepository.findByLevelIdAndSectionAndNum(level.getLevelId(), section, num);
            } else {
                return seatRepository.findByLevelIdAndSection(level.getLevelId(), section);
            }
        }
    }
}
