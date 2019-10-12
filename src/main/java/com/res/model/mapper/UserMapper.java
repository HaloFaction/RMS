package com.res.model.mapper;

import java.util.Map;

import com.res.model.bean.User;

public interface UserMapper {
	
	public User login(Map<String, Object> map);
	
}
