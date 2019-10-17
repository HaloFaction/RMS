package com.res.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.res.model.bean.Emp;
import com.res.model.bean.Kitchen;
import com.res.model.bean.OrderMenu;
import com.res.model.service.KitchenService;

@Controller
public class KitchenController {
	
	@Autowired
	private KitchenService kitchenService;
	
	@RequestMapping("getAllKitchens")
	@ResponseBody
	public List<Kitchen> getAllKitchens(){
		return kitchenService.getAllKitchens();
	}
	@RequestMapping("getAllCooker")
	@ResponseBody
	public List<Emp> getAllCooker(){
		return kitchenService.getAllCooker();
	}
	@RequestMapping("getMaxKid")
	@ResponseBody
	public int getMaxKid(){
		return kitchenService.getMaxKid();
	}
	
 	@RequestMapping("getKitchen/{kid}")
	@ResponseBody
	public Kitchen getKitchen(@PathVariable int kid){
		return kitchenService.getKitchen(kid);
	}
	
	@RequestMapping("getMenusByKid/{kid}")
	@ResponseBody
	public List<OrderMenu> getMenusByKid(@PathVariable int kid){
		return kitchenService.getMenusByKid(kid);
	}
	
	@RequestMapping("changeStatus/{ids}")
	@ResponseBody
	public String changeStatus(@PathVariable String[] ids){
		kitchenService.changeStatus(ids);
		return "修改成功";
	}
	
	@RequestMapping("deleteOrderMenu/{id}")
	@ResponseBody
	public String deleteOrderMenu(@PathVariable int id){
		kitchenService.deleteOrderMenu(id);
		return "划菜成功";
	}
	
	@RequestMapping("addKitchen/{kname}/{empid}")
	@ResponseBody
	public String addKitchen(@PathVariable String kname,@PathVariable int empid){
		 kitchenService.addKitchen(kname, empid);
		 return "添加成功";
	}
	
	@RequestMapping("getOrderMenus")
	@ResponseBody
	public List<OrderMenu> getOrderMenus(){
		return kitchenService.getOrderMenus();
	}
	@RequestMapping("updateOrderMenu/{kid}/{ids}/{nums}")
	@ResponseBody
	public String updateOrderMenu(@PathVariable int kid,@PathVariable String[] ids,@PathVariable String[] nums){
		kitchenService.updateOrderMenu(kid, ids, nums);
		return "分配菜单成功";
	}
	
}
