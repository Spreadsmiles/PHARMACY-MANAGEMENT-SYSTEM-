package com.supplier;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;



@SpringBootApplication
@EnableEurekaClient
public class SupplierMicroservice1Application {

	public static void main(String[] args) {
		SpringApplication.run(SupplierMicroservice1Application.class, args);
	}

}
