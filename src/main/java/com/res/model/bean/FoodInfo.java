package com.res.model.bean;

public class FoodInfo {
	private int id;
	private String fname;
	private int kind;
	private String pic;
	private int price;
	private FoodKind foodkind;
	public FoodKind getFoodkind() {
		return foodkind;
	}
	public void setFoodkind(FoodKind foodkind) {
		this.foodkind = foodkind;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public int getKind() {
		return kind;
	}
	public void setKind(int kind) {
		this.kind = kind;
	}
	public String getPic() {
		return pic;
	}
	public void setPic(String pic) {
		this.pic = pic;
	}
	public int getPrice() {
		return price;
	}
	public void setPrice(int price) {
		this.price = price;
	}
}
