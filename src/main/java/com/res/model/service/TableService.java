package com.res.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.res.model.mapper.TableMapper;

@Service
public class TableService {

	@Autowired
	TableMapper tableMapper;
	
	public String addTable(){
		return tableMapper.addTable();
	}
	
	public String updateTable(){
		return tableMapper.updateTable();
	}
	
	public void removeTable(){
		tableMapper.removeTable();	
	}
	
	
}
