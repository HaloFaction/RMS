package com.res.model.mapper;

import java.util.List;
import java.util.Map;
import com.res.model.bean.Emp;
import com.res.model.bean.Kitchen;
import com.res.model.bean.OrderMenu;

public interface KitchenMapper {
	
	public List<Kitchen> getAllKitchens();
	
	public List<Emp> getAllCooker();
	
	public int getMaxKid();
	
	public Kitchen getKitchen(int kid);
	
	public List<OrderMenu> getMenusByKid(int kid);
	
	public void changeStatus(int[] ids);
	
	public void deleteOrderMenu(int id);
	
	public void addKitchen(Map<String, Object> map);
	
	public List<OrderMenu> getOrderMenus();
	
	public void updateOrderMenu(Map<String, Object> map);
	
	public void addChangedOrderMenu(Map<String, Object> map);
	
	public void deleteOrderMenuOfinvalid();
}
