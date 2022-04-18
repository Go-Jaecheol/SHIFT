package com.shift.shift;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class ShiftApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShiftApplication.class, args);
	}

}
