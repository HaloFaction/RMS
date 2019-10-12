package com.res.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.res.model.bean.User;
import com.res.model.service.UserService;

@Controller
public class UserController {
	
	@Autowired
	private UserService userService;
	
	@RequestMapping("login/{username}/{password}")
	@ResponseBody
	public User login(@PathVariable String username,@PathVariable String password){
		User user = userService.login(username, password);
		return user;
	}

}
