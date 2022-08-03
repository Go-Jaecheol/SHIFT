package com.shift.shift.controller;

import com.shift.shift.domain.Seat;
import com.shift.shift.dto.SeatRequest;
import com.shift.shift.service.SeatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RequiredArgsConstructor
@RequestMapping(value = "/api")
@RestController
public class SeatController {
    private final SeatService seatService;

    @GetMapping("/list/{team}/{level}")
    public List<Seat> seatListApi(@PathVariable("team") String team, @PathVariable("level") String level) {
        log.info(level + " 전체 좌석 목록 조회");
        return seatService.seatList(team, level);
    }

    @PostMapping("/list/{team}/{level}")
    public List<Seat> seatFilterListApi(@PathVariable("team") String team, @PathVariable("level") String level, @RequestBody SeatRequest seatRequest) {
        log.info("필터링 된 좌석 목록 조회");
        return seatService.seatFilterList(team, level, seatRequest);
    }

    @PutMapping("/list/{team}/{level}")
    public void seatAddApi(@PathVariable("team") String team, @PathVariable("level") String level, @RequestBody SeatRequest seatRequest) {
        log.info(seatRequest.getSection() + "구역 " + seatRequest.getRow() + "열 " + seatRequest.getNum() + " 좌석 정보 추가");
        seatService.seatAdd(team, level, seatRequest);
    }
}
