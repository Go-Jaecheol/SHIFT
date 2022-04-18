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
public class Team {
    @Id
    @GeneratedValue
    @Column(name = "team_id", nullable = false, columnDefinition = "INT UNSIGNED")
    private Long teamId;

    @Column(name = "team_name")
    private String teamName;

    private String stadium;

    @Lob
    private byte[] logo;

    @Builder
    public Team(Long teamId, String teamName, String stadium, byte[] logo) {
        this.teamId = teamId;
        this.teamName = teamName;
        this.stadium = stadium;
        this.logo = logo;
    }
}
