package com.shift.shift.dto;

import lombok.Getter;

@Getter
public class SeatFilterRequest {
    private String section;
    private String row;
    private String num;
}
