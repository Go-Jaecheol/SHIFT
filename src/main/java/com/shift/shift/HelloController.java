package com.shift.shift;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;

@RestController
public class HelloController {

    @GetMapping("/api/hello")
    public String hello() {
        return "현재 서버 시각은 " + new Date() + "입니다.";
    }
}
