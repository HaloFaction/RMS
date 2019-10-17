package com.res.model.bean;

import java.util.List;

public class Kitchen {
	private int id;
	private String kname;
	private int user;
	private Emp emp;
	
	// 根据一个厨房的id可以查询到多条ordermenu 修改人：ylh
	private List<OrderMenu> orderMenu;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getKname() {
		return kname;
	}
	public void setKname(String kname) {
		this.kname = kname;
	}
	public int getUser() {
		return user;
	}
	public void setUser(int user) {
		this.user = user;
	}
	public Emp getEmp() {
		return emp;
	}
	public void setEmp(Emp emp) {
		this.emp = emp;
	}
	public List<OrderMenu> getOrderMenu() {
		return orderMenu;
	}
	public void setOrderMenu(List<OrderMenu> orderMenu) {
		this.orderMenu = orderMenu;
	}
	
	
}
