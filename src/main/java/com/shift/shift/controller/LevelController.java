package com.shift.shift.controller;

import com.shift.shift.domain.Level;
import com.shift.shift.service.LevelService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RequestMapping(value = "/api")
@RestController
public class LevelController {
    private final LevelService levelService;

    @GetMapping("/list/{team}")
    public List<Level> levelListApi(@PathVariable("team") String team) {
        log.info("전체 등급 목록 조회");
        return levelService.levelList(team);
    }

    @PostMapping("/list/{team}")
    public List<Level> levelTagListApi(@PathVariable("team") String team, @RequestBody Map<String, String> tagMap) {
        log.info("태그별 등급 목록 조회");
        return levelService.levelTagList(team, tagMap.get("tag"));
    }
}
