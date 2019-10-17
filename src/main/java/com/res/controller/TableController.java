package com.res.controller;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.res.model.bean.Table;
import com.res.model.service.TableService;

@Controller
public class TableController {
	
	@Autowired
	private TableService tableService;
	
	//查找所有餐桌
	@RequestMapping("getTable")
	@ResponseBody
	public List<Table> getTable(){
		return tableService.getTable();
	}
	
	//条件查找餐桌
	@RequestMapping("searchTable")
	@ResponseBody
	public List<Table> searchTable(Table table){
		System.out.println(table.getTname());
		return tableService.searchTable(table);
	}
	
	//新增餐桌
	@RequestMapping("addTable")
	@ResponseBody
	public void addTable(Table table){
		tableService.addTable(table);
	}
	
	//修改餐桌
	@RequestMapping("updateTable")
	@ResponseBody
	public void updateTable(Table table){
		tableService.updateTable(table);	
	}
	
	//删除餐桌   数据写在url里
//	@RequestMapping("removeTable/{id}")
//	@ResponseBody
//	public void removeTable(@PathVariable int id){
//		System.out.println(id);
//		tableService.removeTable(id);
//	}
	
	//删除单/多个餐桌  数据写在data:{key:value}里
//	@RequestMapping("removeTable")
//	@ResponseBody
//	public void removeTable(@Param("ids") String ids){
//		System.out.println("ids==="+ids);
////		List l = new LinkedList();
////		tableService.removeTable(ids);
//	}
	
	//删除单/多个餐桌  数据写在data:JSON.stringify(json对象/json数组) 里
	@RequestMapping("removeTable") 
	@ResponseBody
	public void removeTable(@RequestBody int[] ids){
		tableService.removeTable(ids);
	}
	
	
}
