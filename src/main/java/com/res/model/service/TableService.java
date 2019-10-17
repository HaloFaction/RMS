package com.res.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.res.model.bean.Table;
import com.res.model.mapper.TableMapper;

@Service
public class TableService {

	@Autowired
	private TableMapper tableMapper;
	
	public List<Table> getTable() {
		return tableMapper.getTable();
	}
	
	@Transactional  //事务
	public void addTable(Table table){
		tableMapper.addTable(table);
	}
	
	@Transactional  //事务
	public void updateTable(Table table){
		tableMapper.updateTable(table);
	}
	
//	public void removeTable(int id){
//		tableMapper.removeTable(id);	
//	}
	
	@Transactional  //事务
	public void removeTable(int[] ids){
		tableMapper.removeTable(ids);	
	}

	//查找餐桌
	public List<Table> searchTable(Table table) {
		if(table.getTname()=="") {
			table.setTname(".");
		}
		if(table.getStatus()=="") {
			table.setStatus(".");
		}

		return tableMapper.searchTable(table);
	}

	
	
}
