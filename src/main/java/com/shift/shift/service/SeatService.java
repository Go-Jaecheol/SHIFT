package com.shift.shift.service;

import com.shift.shift.domain.Level;
import com.shift.shift.domain.Seat;
import com.shift.shift.domain.SeatFilterSpecification;
import com.shift.shift.domain.Team;
import com.shift.shift.dto.SeatRequest;
import com.shift.shift.repository.LevelRepository;
import com.shift.shift.repository.SeatRepository;
import com.shift.shift.repository.TeamRepository;
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
    private final TeamRepository teamRepository;

    @Transactional
    public List<Seat> seatList(String teamName, String levelName) {
        Team team = teamRepository.findByTeamName(teamName);
        Level level = levelRepository.findByTeamIdAndLevelName(team.getTeamId(), levelName);
        return seatRepository.findByLevelId(level.getLevelId());
    }

    @Transactional
    public List<Seat> seatFilterList(String teamName, String levelName, SeatRequest seatRequest) {
        Team team = teamRepository.findByTeamName(teamName);
        Level level = levelRepository.findByTeamIdAndLevelName(team.getTeamId(), levelName);
        String section = seatRequest.getSection();
        String row = seatRequest.getRow();
        String num = seatRequest.getNum();

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

    @Transactional
    public void seatAdd(String teamName, String levelName, SeatRequest seatRequest) {
        Team team = teamRepository.findByTeamName(teamName);
        Level level = levelRepository.findByTeamIdAndLevelName(team.getTeamId(), levelName);

        Seat seat = Seat.builder()
                .seatSection(seatRequest.getSection())
                .seatRow(seatRequest.getRow())
                .seatNum(seatRequest.getNum())
                .levelId(level.getLevelId())
                .build();

        seatRepository.save(seat);
    }
}
