package com.bb.akhambir.kalah.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;

@Configuration
@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan("com.bb.akhambir.kalah.*")
public class KalahApplication {
	public static void main(String[] args) {
		SpringApplication.run(KalahApplication.class, args);
	}
}
