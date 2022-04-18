package com.shift.shift.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity
public class Level {
    @Id
    @GeneratedValue
    @Column(name = "level_id", nullable = false, columnDefinition = "INT UNSIGNED")
    private Long levelId;

    @Column(name = "level_name")
    private String levelName;

    @Column(name = "team_id", columnDefinition = "INT UNSIGNED")
    private Long teamId;

    @Column(name = "tag_name")
    private String tagName;

    @Column(name = "tag_color")
    private String tagColor;

    @Builder
    public Level(Long levelId, String levelName, Long teamId, String tagName, String tagColor) {
        this.levelId = levelId;
        this.levelName = levelName;
        this.teamId = teamId;
        this.tagName = tagName;
        this.tagColor = tagColor;
    }
}
