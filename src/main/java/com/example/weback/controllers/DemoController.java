package com.example.weback.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    
    //URL index
    @GetMapping("/index.html")
    public String index() {
        return "Return de prueba";
    }

    //URL home
    @GetMapping(value="/home.html")
    public String home(){
    return "home.html";
}
}
