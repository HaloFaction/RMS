$(function(){
	
	$.getScript("js/main.js");
	$("#nav-list").load("main.html .nav-list", function() {
		$("#pageChineseName").html("点菜分配视图");
	});
	// 获取跳转url地址中属性的函数 GetQueryString
	function GetQueryString(name){
	     var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	     var r = window.location.search.substr(1).match(reg);
	     if(r!=null)return decodeURI(r[2]); return null;
	}
	// 过获取url中的role的值
	var role  = GetQueryString("role");
	// 公共部分main
	$("#nav-end").load("main.html .nav-end", function() {
		$("#userName").html(role);
	});
	
	// 查询厨位模块
	$(document).on("click","#ensureGetKitchen",function(){
		var kid = $("#kid").val();
		console.log(kid);
		$.ajax({
			type:"post",
			url:"getKitchen/"+kid,
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data);
				$("#body").empty();
				var flag = true;
				for(var j = 0;j< data.orderMenu.length;j++){
					if(data.orderMenu[j].status == "制作中"){
						flag  = false;
						break;
					}
				}
				if(flag == false){
					$("#body").append("<div  style='margin-left: 40px;margin-top: 20px;'>" +
							"<img src='image/厨位.jpg' class='img-thumbnail' style='width: 200px;height: 200xp;'><br>" +
							"<span style='font-size:20px;'>厨位号："+data.kname+"</span>"+"<br><span style='font-size:20px;'>状态：<img src='image/忙碌.png' style='width: 30px;height: 30xp;' >忙碌</span>"+
							"<br><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#myModal' data-kid='"+data.id+
							"' id='getMenusByKid'>查看菜单</button><button type='button' class='btn btn-warning' style='margin-left:30px' id='dispatcherMenus' data-toggle='modal' kidForDispatcher='"+data[i].id+"' data-target='#dispatcherModal'>配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;菜</button>" +
							"</div>")
				}else{
					$("#body").append("<div  style='margin-left: 40px;margin-top: 20px;'>" +
							"<img src='image/厨位.jpg' class='img-thumbnail' style='width: 200px;height: 200xp;'><br>" +
							"<span style='font-size:20px;'>厨位号："+data.kname+"</span>"+"<br><span style='font-size:20px;'>状态：<img src='image/闲置.jpg' style='width: 27px;height: 27xp;' >空闲</span>"+
							"<br><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#myModal' data-kid='"+data.id+
							"' id='getMenusByKid'>查看菜单</button><button type='button' class='btn btn-warning' style='margin-left:30px' id='dispatcherMenus' data-toggle='modal' kidForDispatcher='"+data[i].id+"' data-target='#dispatcherModal'>配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;菜</button>" +
							"</div>")
				}
				
			}
		})
	})
	
	// 添加厨位
	// 首先查询所有厨师，将厨师添加到下拉列表
	$.ajax({
		type:"post",
		url:"getAllCooker",
		data:{},
		dataType:"json",
		success:function(data){
			console.log(data);
			$("#cookerList").empty();
			$("#cookerList").append("<option value='-1'>---请选择---</option>");
			for(var i = 0;i< data.length;i++){
				if(data[i].user.role == "厨师"){
					$("#cookerList").append("<option value='"+data[i].id+"'>"+data[i].ename+"</option>");
				}
			}
		}
	})
	$("#ensureAddKitchen").attr("disabled",true);
	// 添加厨位模块：判断是否选中某一个选项
	$(document).on("change","#cookerList",function(){
		var selectedEid = $("#cookerList option:selected").val();
		if(selectedEid >= 1){
			$("#ensureAddKitchen").attr("disabled",false);
		}else{
			$("#ensureAddKitchen").attr("disabled",true);
		}
	})
	// 查询厨位模块:给输入的厨位号绑定blur事件，验证厨位号
	$("#kid").popover('hide');
	$("#ensureGetKitchen").attr("disabled",true);
	$(document).on("input onpropertychange","#kid",function(){
		var kid = $("#kid").val();
		console.log(kid);
		$.ajax({
			type:"post",
			url:"getAllKitchens",
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data);
				var flag = true;
				for(var i = 0;i< data.length;i++){
					if(data[i].id == kid){
						flag = false;
						break;
					}
				}
				if(flag){
					$("#ensureGetKitchen").attr("disabled",true);
					$("#kid").popover('show');
				}else{
					$("#ensureGetKitchen").attr("disabled",false);
					$("#kid").popover('hide');
				}
			}
		})
		
	})
	// 添加厨位模块：获取最大厨位号
	$.ajax({
		type:"post",
		url:"getMaxKid",
		data:{},
		dataType:"text",
		success:function(data){
			var kname = data+"号厨位";
			$("#addKname").val(kname);
		}
	})
	// 添加厨位
	$(document).on("click","#ensureAddKitchen",function(){
		// 获取 厨位号、厨师号（userid），添加到数据库厨位表中
		var kname = $("#addKname").val();
		var empid  = $("#cookerList option:selected").val();
		console.log(empid);
		$.ajax({
			type:"post",
			url:"addKitchen/"+kname+"/"+empid,
			data:{},
			dataType:"text",
			success:function(data){
				alert(data);
				location.reload();
			}
		})
	})
	
	// 显示所有厨位
	$("#getAllKitchens").click(function(){
		getAllkitchens();
	})
	getAllkitchens();
	function getAllkitchens(){
		$("#body").empty();
		$.ajax({
			type:"post",
			url:"getAllKitchens",
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data);
				for(var i = 0;i< data.length;i++){
					var flag = true;
					for(var j = 0;j< data[i].orderMenu.length;j++){
						if(data[i].orderMenu[j].status == "制作中"){
							flag  = false;
							break;
						}
					}
					if(flag == false){
						$("#body").append("<div  style='margin-left: 40px;margin-top: 20px;'>" +
								"<img src='image/厨位.jpg' class='img-thumbnail' style='width: 200px;height: 200xp;'><br>" +
								"<span style='font-size:20px;'>厨位号："+data[i].kname+"</span>"+"<br><span style='font-size:20px;'>状态：<img src='image/忙碌.png' style='width: 30px;height: 30xp;' >忙碌</span>"+
								"<br><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#myModal' data-kid='"+data[i].id+
								"' id='getMenusByKid'>查看菜单</button><button type='button' class='btn btn-warning' style='margin-left:30px' id='dispatcherMenus' data-toggle='modal' kidForDispatcher='"+data[i].id+"' data-target='#dispatcherModal'>配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;菜</button>" +
								"</div>")
					}else{
						$("#body").append("<div  style='margin-left: 40px;margin-top: 20px;'>" +
								"<img src='image/厨位.jpg' class='img-thumbnail' style='width: 200px;height: 200xp;'><br>" +
								"<span style='font-size:20px;'>厨位号："+data[i].kname+"</span>"+"<br><span style='font-size:20px;'>状态：<img src='image/闲置.jpg' style='width: 27px;height: 27xp;' >空闲</span>"+
								"<br><button type='button' class='btn btn-primary' data-toggle='modal' data-target='#myModal' data-kid='"+data[i].id+
								"' id='getMenusByKid'>查看菜单</button><button type='button' class='btn btn-warning' style='margin-left:30px' id='dispatcherMenus' data-toggle='modal' kidForDispatcher='"+data[i].id+"' data-target='#dispatcherModal'>配&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;菜</button>" +
								"</div>")
					}
				}
			}
		})
	}
	
	function closeWindow(){
		location.reload();
	}
	// 查询已有厨位菜单模块：按厨位id获取菜单 getMenusByKid
	function getMenusByKid(kid){
		$.ajax({
			type:"post",
			url:"getMenusByKid/"+kid,
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data);
				if(data.length == 0){
					$("#menus tr").not(":eq(0)").remove();
					$("#menusList").children().not(":eq(0)").remove();
					$("#menusList").append("<span style='font-size:20px'>此厨位无正在制作的菜品</span>");
				}else{
					$("#menus tr").not(":eq(0)").remove();
					$("#menusList").children().not(":eq(0)").remove();
					var flag = true;
					for(var i = 0;i< data.length;i++){
						if(data[i].status == "制作中"){
							$("#menus").append("<tr><td><input type='checkbox'  class='check' hideid='"+data[i].id+"' /></td><td>"+data[i].fno+".</td><td>"+data[i].foodInfo.fname+"</td><td>"+data[i].status+"</td><td><button type='button' class='btn btn-danger' delete_id='"+data[i].id+"' data_kid='"+data[i].kid+"' id='changeStatus'>划菜</button></td></tr>");
							flag = false;
						}
					}
					if(flag){
						$("#menusList").append("<span style='font-size:20px'>此厨位无正在制作的菜品</span>");
					}
				}
			}
		})
	}
	$(document).on("click","#getMenusByKid",function(){
		var kid = $(this).attr("data-kid");
		console.log(kid);
		getMenusByKid(kid);
	})
	var flag1 = true;
	$(document).on("click","#selectAll1",function(){
		$("#menus tr:gt(0) :checkbox").each(function(){
			if($(this).prop("checked") != true){
				flag1 = false;
			}
		})
		console.log(flag1);
		if(flag1 == false){
		     $("#menus tr:gt(0) :checkbox").prop("checked", true);
		     flag1 = true;
		 }else{
			 $("#menus tr:gt(0) :checkbox").prop("checked", false);
			 flag1 = true;
		 }
	})
	var flag2 = false;
	$(document).on("click","#selectAll2",function(){
		$("#dispatcherMenuList tr:gt(0) :checkbox").each(function(){
			if($(this).prop("checked") != true){
				flag2 = false;
			}
		})
		if(flag2 == false){
		     $("#dispatcherMenuList tr:gt(0) :checkbox").prop("checked", true);
		     flag2 = true;
		 }else{
			 $("#dispatcherMenuList tr:gt(0) :checkbox").prop("checked", false);
			 flag2 = true;
		 }
	})
	$(document).on("click","#completeCook",function(){
		var ids = [];
		$("#menus input:checkbox:checked").each(function(i){
			ids[i] = $(this).attr("hideid");
		})
		console.log(ids);
		$.ajax({
			type:"post",
			url:"changeStatus/"+ids,
			data:{},
			dataType:"text",
			success:function(data){
				alert(data);
				location.reload();
			}
		})
	})
	
	$(document).on("click","#changeStatus",function(){
		var id = $(this).attr("delete_id");
		console.log(id);
		$.ajax({
			type:"post",
			url:"deleteOrderMenu/"+id,
			data:{},
			dataType:"text",
			success:function(data){
				alert(data);
			}
		})
		var kid = $(this).attr("data_kid");
		console.log(kid);
		getMenusByKid(kid);
	})
	// 给添加菜单的图标增加分配菜单的点击事件
	$(document).on("click","#dispatcherMenus",function(){
		$("#completeDispatching").attr("disabled",true);
		// 获取所有未分配厨位的ordermenu
		$.ajax({
			type:"post",
			url:"getOrderMenus",
			data:{},
			dataType:"json",
			success:function(data){
				console.log(data);
				console.log(data.length);
				if(data.length == 0){
					$("#dispatcherMenuList tr").not(":eq(0)").remove();
					$("#dispatcherBody").children().not(":eq(0)").remove();
					$("#dispatcherBody").append("<span style='font-size:20px'>无任何菜品订单</span>");
					$("#completeDispatching").attr("disabled",true);
				}else{
					$("#dispatcherMenuList tr").not(":eq(0)").remove();
					$("#dispatcherBody").children().not(":eq(0)").remove();
					var flag = false;
					for(var i = 0;i< data.length;i++){
							$("#dispatcherMenuList").append("<tr><td>"+data[i].id+"</td><td>"+data[i].fno+".</td><td>"+data[i].foodInfo.fname+"</td><td>"+data[i].status+"</td><td>"
							+data[i].fnum+"</td><td>" +
							"<div class='numOperator' style='display: flex;'><div class='addDiv' style='width: 20px; height: 20px;border-radius: 50%;background-color: orange;line-height: 20px;text-align: center;'>"+
									"<span id='' style='font-size: 20px;font-weight: bold;'>"+
										"<a href='#' style='text-decoration: none;color: black;' class='add' >+</a></span></div>"+
								"<span  style='font-size: 20px;margin-left: 5px;margin-right: 5px;line-height: 22px;' data_fnum='"+data[i].fnum+"'>0</span>"+
								"<div class='cutDiv' style='width: 20px; height: 20px;border-radius: 50%;background-color: orange;line-height: 15px;text-align: center;'>"+
									"<span  style='font-size: 30px;font-weight: bold;'>"+
										"<a href='#' style='text-decoration: none;color: black;' class='cut' >-</a></span></div></div>"	
							+"</td></tr>");
					}
					$("#completeDispatching").attr("disabled",false);
				}
			}
		})
		var kid = $(this).attr("kidForDispatcher");
		console.log(kid);
		$("#completeDispatching").attr("data_kid",kid);
		
	})
	// 给所有配菜中添加购物车的增加按钮绑定click事件
	$(document).on("click",".add",function(){
		// 获取当前加号之前的数量
		var curNum = $(this).parents(".addDiv").next().html();
		// 获取加号这一行的数量列的值
		var num = $(this).parents(".addDiv").next().attr("data_fnum");
		curNum = parseInt(curNum);
		num = parseInt(num);
		// 判断
		if(curNum == 0){
			// 点击使数量加一
			curNum = curNum+1;
			$(this).parents(".addDiv").next().html(curNum);
		}else if(curNum<num){
			curNum = curNum+1;
			$(this).parents(".addDiv").next().html(curNum);
		} 
		// 追加判断，修改css样式
		if(curNum == num){
			$(this).parents(".addDiv").css("background-color","gray");
			$(this).parents(".addDiv").next().next().css("background-color","orange");
		}else{
			$(this).parents(".addDiv").next().next().css("background-color","orange");
		}
	})
	// 给所有配菜中添加购物车的减少按钮绑定click事件
	$(document).on("click",".cut",function(){
		// 获取当前减号之前的数量
		var curNum = $(this).parents(".cutDiv").prev().html();
		// 获取减这一行的数量列的值
		var num = $(this).parents(".cutDiv").prev().attr("data_fnum");
		curNum = parseInt(curNum);
		num = parseInt(num);
		// 判断
		if(curNum<num&&curNum>0){
			curNum = curNum-1;
			$(this).parents(".cutDiv").prev().html(curNum);
		}else if(curNum == num){
			curNum = curNum-1;
			$(this).parents(".cutDiv").prev().html(curNum);
		}
		//追加判断，修改css样式
		if(curNum == 0){
			$(this).parents(".cutDiv").css("background-color","gray");
			$(this).parents(".cutDiv").prev().prev().css("background-color","orange");
		}else{
			$(this).parents(".cutDiv").prev().prev().css("background-color","orange");
		}
	})
	
	$(document).on("click","#completeDispatching",function(){
		// 获取列表中全部订单编号
		var ids = [];
		$("#dispatcherMenuList tr").not(":eq(0)").each(function(i){
			console.log($(this).children("td:first").html());
			ids[i] = $(this).children("td:first").html();
		})
		console.log(ids);
		// 获取列表中全部的数量
		var nums = [];
		$("#dispatcherMenuList tr").not(":eq(0)").each(function(i){
			console.log($(this).find("td:last").children().children().first().next().html());
			nums[i] = $(this).find("td:last").children().children().first().next().html();
		})
		console.log(nums);
		
		// 获取当前厨位
		var kid = $(this).attr("data_kid");
		console.log(kid);
		// 将数据发到后台,分配菜单到厨位
		$.ajax({
			type:"post",
			url:"updateOrderMenu/"+kid+"/"+ids+"/"+nums,
			data:{},
			dataType:"text",
			success:function(data){
				alert(data);
				location.reload();
			}
		})
	})
	
})