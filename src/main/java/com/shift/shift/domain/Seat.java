package com.shift.shift.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity
public class Seat {
    @Id
    @GeneratedValue
    @Column(name = "seat_id", nullable = false, columnDefinition = "INT UNSIGNED")
    private Long seatId;

    private String section;

    private String col;

    private String num;

    @Column(name = "level_id", columnDefinition = "INT UNSIGNED")
    private Long levelId;

    @Column(name = "avg_rating")
    private BigDecimal avgRating;

    @Builder
    public Seat(Long seatId, String section, String col, String num, Long levelId, BigDecimal avgRating) {
        this.seatId = seatId;
        this.section = section;
        this.col = col;
        this.num = num;
        this.levelId = levelId;
        this.avgRating = avgRating;
    }
}
