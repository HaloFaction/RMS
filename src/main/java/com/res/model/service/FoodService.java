package com.res.model.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.res.model.bean.FoodInfo;
import com.res.model.bean.FoodKind;
import com.res.model.mapper.FoodMapper;

@Service
public class FoodService {
	@Autowired
	private FoodMapper foodmapper;
	public List<FoodInfo> getAllFood(){
		return foodmapper.getAllFood();
	}
	public List<FoodInfo> getHotFood(){
		return foodmapper.getHotFood();
	}
	public List<FoodInfo> getIceFood(){
		return foodmapper.getIceFood();
	}
	public List<FoodInfo> getSweetFood(){
		return foodmapper.getSweetFood();
	}
	public List<FoodInfo> getSopeFood(){
		return foodmapper.getSopeFood();
	}
	public List<FoodInfo> getDrinkFood(){
		return foodmapper.getDrinkFood();
	}
	public void deleteFoodInfo(int id){
		foodmapper.deleteFoodInfo(id);
	}
	public List<FoodKind> getFoodKind(){
		return foodmapper.getFoodKind();
	}
	public void insertFoodInfo(FoodInfo fi){
		 foodmapper.insertFoodInfo(fi);
	}
	public void updateFoodInfo(FoodInfo fi){
		foodmapper.updateFoodInfo(fi);
	}
}
