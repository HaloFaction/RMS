package com.res.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

import com.res.model.bean.User;

@Controller
public class LoginController {
	@RequestMapping("login")
	public String login(User user){
		
	}
}
