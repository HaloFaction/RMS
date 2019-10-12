package com.res.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.res.model.bean.FoodInfo;
import com.res.model.service.FoodService;

@Controller
public class FoodController {
	@Autowired
	private FoodService foodservice;
	@RequestMapping("getAllFood")
	@ResponseBody
	public List<FoodInfo> getAllFood(){
		return foodservice.getAllFood();
	}
}
