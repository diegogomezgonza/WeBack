package com.example.weback.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

//Detecta todos los beans del paquete especificado
@SpringBootApplication(scanBasePackages = "com.example.weback")
public class DemoApplication {

	//Inicio la aplicación
	public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}
