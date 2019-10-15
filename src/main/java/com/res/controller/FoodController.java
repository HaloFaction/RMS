package com.res.controller;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import com.res.model.bean.FoodInfo;
import com.res.model.bean.FoodKind;
import com.res.model.service.FoodService;

@Controller
public class FoodController {
	@Autowired
	private FoodService foodservice;
	@RequestMapping("getAllFood")
	@ResponseBody
	public List<FoodInfo> getAllFood(){
		return foodservice.getAllFood();
	}
	
	@RequestMapping("getHotFood")
	@ResponseBody
	public List<FoodInfo> getHotFood(){
		return foodservice.getHotFood();
	}
	
	@RequestMapping("getIceFood")
	@ResponseBody
	public List<FoodInfo> getIceFood(){
		return foodservice.getIceFood();
	}
	
	@RequestMapping("getSweetFood")
	@ResponseBody
	public List<FoodInfo> getSweetFood(){
		return foodservice.getSweetFood();
	}
	
	@RequestMapping("getSopeFood")
	@ResponseBody
	public List<FoodInfo> getSopeFood(){
		return foodservice.getSopeFood();
	}
	@RequestMapping("getDrinkFood")
	@ResponseBody
	public List<FoodInfo> getDrinkFood(){
		return foodservice.getDrinkFood();
	}
	@RequestMapping("deleteFoodInfo/{id}/{pic}")
	@ResponseBody
	public String deleteFoodInfo(@PathVariable int id,@PathVariable String pic,HttpServletRequest request){
		String filePath=request.getServletContext().getRealPath("/img/"+pic+".jpg") ;
		File file=new File(filePath);
		file.delete();
		foodservice.deleteFoodInfo(id);
		return "{\"result\":\"删除成功\"}";
	}
	@RequestMapping("getFoodKind")
	@ResponseBody
	public List<FoodKind> getFoodKind(){
		return foodservice.getFoodKind();
	}
	@RequestMapping("insertFoodInfo")
	@ResponseBody
	public String insertFoodInfo(MultipartFile ff,FoodInfo fi,HttpServletRequest request){
		
			String pic=new SimpleDateFormat("yyyyMMddHHmm").format(new Date());
	        String fileName = pic+".jpg" ;
	        String filePath = request.getServletContext().getRealPath("/img/") ;
	        File dest = new File(filePath + fileName);
	        try {
				ff.transferTo(dest);
			} catch (IllegalStateException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	        fi.setPic(pic);
	        foodservice.insertFoodInfo(fi);
	       	      return "{\"result\":\"添加成功\"}";
	        
	    }
	@RequestMapping("updateFoodInfo")
	@ResponseBody
	public String updateFoodInfo(MultipartFile ff,FoodInfo fi,HttpServletRequest request){
		
		if(!ff.isEmpty()){
			String DfilePath=request.getServletContext().getRealPath("/img/"+fi.getPic()+".jpg") ;
			File file=new File(DfilePath);
			file.delete();
		String pic=new SimpleDateFormat("yyyyMMddHHmm").format(new Date());
        String fileName = pic+".jpg" ;
        String filePath = request.getServletContext().getRealPath("/img/") ;
        File dest = new File(filePath + fileName);
        try {
			ff.transferTo(dest);
		} catch (IllegalStateException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        fi.setPic(pic);
        foodservice.updateFoodInfo(fi);
       	      return "{\"result\":\"更新成功\"}";
		}else{
			foodservice.updateFoodInfo(fi);
			return "{\"result\":\"更新成功\"}";
		}
	}
}
