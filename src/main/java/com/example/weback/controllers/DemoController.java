package com.example.weback.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class DemoController {

    // URL index
    @GetMapping("/index.html")
    public String index() {
        return "index"; 
    }

    // URL home
    @GetMapping("/home.html")
    public String home() {
        return "home";
    }

    // URL gallery
    @GetMapping("/gallery.html")
    public String gallery() {
        return "gallery";
    }

    // URL contact
    @GetMapping("/contact.html")
    public String contact() {
        return "contact";
    }
}
