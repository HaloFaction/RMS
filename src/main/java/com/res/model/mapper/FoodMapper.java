package com.res.model.mapper;

import java.util.List;

import com.res.model.bean.FoodInfo;
import com.res.model.bean.FoodKind;

public interface FoodMapper {
	public List<FoodInfo> getAllFood();
	public List<FoodInfo> getHotFood();
	public List<FoodInfo> getIceFood();
	public List<FoodInfo> getSweetFood();
	public List<FoodInfo> getSopeFood();
	public List<FoodInfo> getDrinkFood();
	public void deleteFoodInfo(int id);
	public List<FoodKind> getFoodKind();
	public void insertFoodInfo(FoodInfo fi);
	public void updateFoodInfo(FoodInfo fi);
}
