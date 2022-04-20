package com.shift.shift.controller;

import com.shift.shift.domain.Seat;
import com.shift.shift.service.SeatService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
        return seatService.seatList(level);
    }
}
