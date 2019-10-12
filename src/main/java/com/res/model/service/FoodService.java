package com.res.model.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.res.model.bean.FoodInfo;
import com.res.model.mapper.FoodMapper;

@Service
public class FoodService {
	@Autowired
	private FoodMapper foodmapper;
	public List<FoodInfo> getAllFood(){
		return foodmapper.getAllFood();
	}
}
