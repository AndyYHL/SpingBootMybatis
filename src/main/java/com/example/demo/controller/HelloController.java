package com.example.demo.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by Administrator on 2018/1/29.
 */
@Controller
public class HelloController {
    @RequestMapping("/")
    public String index(){
        return "index";
    }
}
