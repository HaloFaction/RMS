package com.res.model.bean;

public class OrderMenu {
	private int id;
	private int orderid;
	private int fno;
	private int fnum;
	private int kid;
	private String remarks;
	private String status;
	// 一条order对应一个菜品,故添加一个FoodInfo类  修改人：ylh
	private FoodInfo foodInfo;
	
	public int getKid() {
		return kid;
	}
	public void setKid(int kid) {
		this.kid = kid;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getOrderid() {
		return orderid;
	}
	public void setOrderid(int orderid) {
		this.orderid = orderid;
	}
	public int getFno() {
		return fno;
	}
	public void setFno(int fno) {
		this.fno = fno;
	}
	public int getFnum() {
		return fnum;
	}
	public void setFnum(int fnum) {
		this.fnum = fnum;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public FoodInfo getFoodInfo() {
		return foodInfo;
	}
	public void setFoodInfo(FoodInfo foodInfo) {
		this.foodInfo = foodInfo;
	}
	
	
}
