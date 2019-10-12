package com.res.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.res.model.service.TableService;

@Controller
public class TableController {
	
	@Autowired
	TableService tableService;
	
	@RequestMapping("addTable")
	@ResponseBody
	public String addTable(){
		
		return null;
		
	}
	
	@RequestMapping("updateTable")
	@ResponseBody
	public String updateTable(){
		
		return null;
		
	}
	
	@RequestMapping("removeTable")
	@ResponseBody
	public String removeTable(){
		
		return null;
		
	}
	
	
	
	
}
