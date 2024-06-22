package com.example.weback.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

//Defino la clase como controlador
@Controller
public class DemoController {
    
    // Mapea la URL "/index.html" a este método para solicitudes GET
    @RequestMapping(value="/index.html", method = RequestMethod.GET)
    //El contenido de responseBody me devuelve la respuesta HTTP
    @ResponseBody
    public String index(){
        return "Return de prueba";
    }
}
