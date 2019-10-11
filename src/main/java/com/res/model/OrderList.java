package com.res.model;

import java.sql.Date;

public class OrderList {
	private int id;
	private int tno;
	private int cusnum;
	private int waiter;
	private double cost;
	private int paystatus;
	private Date start;
	private Date end;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getTno() {
		return tno;
	}
	public void setTno(int tno) {
		this.tno = tno;
	}
	public int getCusnum() {
		return cusnum;
	}
	public void setCusnum(int cusnum) {
		this.cusnum = cusnum;
	}
	public int getWaiter() {
		return waiter;
	}
	public void setWaiter(int waiter) {
		this.waiter = waiter;
	}
	public double getCost() {
		return cost;
	}
	public void setCost(double cost) {
		this.cost = cost;
	}
	public int getPaystatus() {
		return paystatus;
	}
	public void setPaystatus(int paystatus) {
		this.paystatus = paystatus;
	}
	public Date getStart() {
		return start;
	}
	public void setStart(Date start) {
		this.start = start;
	}
	public Date getEnd() {
		return end;
	}
	public void setEnd(Date end) {
		this.end = end;
	}
}
