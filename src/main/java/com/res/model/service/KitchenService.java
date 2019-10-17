package com.res.model.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.res.model.bean.Emp;
import com.res.model.bean.Kitchen;
import com.res.model.bean.OrderMenu;
import com.res.model.mapper.KitchenMapper;

@Service
public class KitchenService {
	
	@Autowired
	private KitchenMapper kitchenMapper;
	
	public List<Kitchen> getAllKitchens(){
		return kitchenMapper.getAllKitchens();
	}
	
	public List<Emp> getAllCooker(){
		return kitchenMapper.getAllCooker();
	}
	
	public int getMaxKid(){
		return kitchenMapper.getMaxKid();
	}
	
	public Kitchen getKitchen(int kid){
		return kitchenMapper.getKitchen(kid);
	}
	
	public List<OrderMenu> getMenusByKid(int kid){
		return kitchenMapper.getMenusByKid(kid);
	}
	
	public void changeStatus(String[] ids){
		// String数组转int数组
		int[] integers = new int[ids.length];
		int i = 0;
		for (String str : ids) {
			integers[i] = Integer.parseInt(str);
			i++;
		}
		kitchenMapper.changeStatus(integers);
	}
	
	public void deleteOrderMenu(int id){
		kitchenMapper.deleteOrderMenu(id);
	}
	
	public void addKitchen(String kname,int empid){
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("kname", kname);
		map.put("empid", empid);
		kitchenMapper.addKitchen(map);
	}
	
	public List<OrderMenu> getOrderMenus(){
		return kitchenMapper.getOrderMenus();
	}
	
	public void updateOrderMenu(int kid,String[] ids,String[] nums){
		// 编号的String数组转int数组
		int[] integer1 = new int[ids.length];
		int i = 0;
		for (String str : ids) {
			integer1[i] = Integer.parseInt(str);
			i++;
		}
		// 数量的String数组转int数组
		int[] integer2 = new int[nums.length];
		int j = 0;
		for (String str : nums) {
			integer2[j] = Integer.parseInt(str);
			j++;
		}
		// 循环 插入新的分配好厨位号的，菜品数量的数据、以及更新菜单原数据的数量
		Map<String, Object> map = new HashMap<String, Object>();
		for(int k = 0;k< ids.length;k++){
			map.put("kid", kid);
			map.put("id", integer1[k]);
			map.put("num", integer2[k]);
			kitchenMapper.updateOrderMenu(map);
			kitchenMapper.addChangedOrderMenu(map);
		}
		// 删除全部数量为0的数据条
		kitchenMapper.deleteOrderMenuOfinvalid();
		
	}
}
