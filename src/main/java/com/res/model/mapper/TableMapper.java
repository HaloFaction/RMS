package com.res.model.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.res.model.bean.Table;

@Mapper
public interface TableMapper {
	
	public void addTable(Table table);
	
	public void updateTable(Table table);
	
	public void removeTable(int[] ids);
	
	public List<Table> getTable();

	public List<Table> searchTable(Table table);

}
