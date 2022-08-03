package com.shift.shift.domain;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
@Entity
public class Seat {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "seat_id", nullable = false, columnDefinition = "INT UNSIGNED")
    private Long seatId;

    @Column(name = "seat_section")
    private String seatSection;

    @Column(name = "seat_row")
    private String seatRow;

    @Column(name = "seat_num")
    private String seatNum;

    @Column(name = "level_id", columnDefinition = "INT UNSIGNED")
    private Long levelId;

    @Column(name = "avg_rating")
    private BigDecimal avgRating;

    @Builder
    public Seat(Long seatId, String seatSection, String seatRow, String seatNum, Long levelId, BigDecimal avgRating) {
        this.seatId = seatId;
        this.seatSection = seatSection;
        this.seatRow = seatRow;
        this.seatNum = seatNum;
        this.levelId = levelId;
        this.avgRating = avgRating;
    }
}
