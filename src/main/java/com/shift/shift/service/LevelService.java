package com.shift.shift.service;

import com.shift.shift.domain.Level;
import com.shift.shift.domain.Team;
import com.shift.shift.repository.LevelRepository;
import com.shift.shift.repository.TeamRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Slf4j
@RequiredArgsConstructor
@Service
public class LevelService {
    private final LevelRepository levelRepository;
    private final TeamRepository teamRepository;

    @Transactional
    public List<Level> levelList(String teamName) {
        Team team = teamRepository.findByTeamName(teamName);
        return levelRepository.findByTeamId(team.getTeamId());
    }
}
