package com.example.weback.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    
    //Mapeo de la URL 
    @GetMapping("/index.html")
    public String index() {
        return "Return de prueba";
    }
}
