$(function(){
	var arrCheckedTableIDs = []; // 存放已勾选的table id
	refreshTable();//展示所有餐桌信息
	
	// 添加餐桌按钮
	$("#btnAddTable").click(function(){
		$("#modalTitle").text("添加餐桌");
		$("#btnUpdateTableForm").hide();
		$("#btnAddTableForm").show();
		$("#addAndUpdateModal").modal("show");
	});	
	// 提交添加餐桌表单的按钮
	$("#btnAddTableForm").click(function(){
		$.ajax({
			url:"addTable",
			type:"post",
			data:$("#formAddAndUpdateTable").serialize(),
			dataType:"json",
			success:function(data){
				refreshTable();
			}
		})
		$("#addAndUpdateModal").modal("hide");
		
	})
	
	// 查找餐桌按钮
	$("#btnSearchTable").click(function(event){
		event.preventDefault();
		$.ajax({
			url:"searchTable",
			type:"post",
			data:$("#formSearchTable").serialize(),
			dataType:"json",
			success:function(data){
				refreshTableCore(data);
			},
		})
		
	});
	
	
	// 修改单个餐桌按钮, 用事件冒泡机制来处理
	$(document).on("click",".btnUpdateTable",function(){
	  var tableID = $(this).attr("tableID");
	  console.log($(this).parent().parent().find("td").eq(2).text());
	  console.log($(this).parent().parent().find("td").eq(3).text());
	  console.log($(this).parent().parent().find("td").eq(4).text());
	  console.log($(this).parent().parent().find("td").eq(5).text());
	  //修改表单显示内容
	  $("#formAddAndUpdateTable-id").val($(this).attr("tableID"));
	  $("#formAddAndUpdateTable-tname").val($(this).parent().parent().find("td").eq(2).text());
	  $("#formAddAndUpdateTable-num").val($(this).parent().parent().find("td").eq(3).text());
	  $("#formAddAndUpdateTable-status").val($(this).parent().parent().find("td").eq(4).text());
	  $("#formAddAndUpdateTable-remark").val($(this).parent().parent().find("td").eq(5).text());
	  //弹窗信息修改
	  $("#modalTitle").text("修改餐桌");
	  $("#btnAddTableForm").hide();//隐藏"确认添加"按钮
	  $("#btnUpdateTableForm").show();//显示"确认修改"按钮
	  $("#addAndUpdateModal").modal();//弹出修改单
	});
	//确认修改按钮
	$("#btnUpdateTableForm").click(function(){
		$.ajax({
			url:"updateTable",
			type:"post",
			data:$("#formAddAndUpdateTable").serialize(),
			dataType:"json",
			success:function(data){
				refreshTable();
			}
		})
		$("#addAndUpdateModal").modal("hide");
	});
	
	// 删除单个餐桌按钮(获取勾选数组,弹出提示框)
	$(document).on("click",".btnRemoveTable",function(){
		arrCheckedTableIDs = [$(this).attr("tableID")];
		//修改确认框的提示文本,弹出确认框
		var tableName = $(this).attr("tableName");
		$("#removeModalTableName").text(tableName);
		$("#removeModal").modal();
	});
	// 删除多个餐桌按钮(获取勾选数组,弹出提示框)
	$("#btnRemoveTable").click(function(event){
		event.preventDefault();
		var selectedTable = $(".selectedTable");
		arrCheckedTableIDs = [];	//清空数组
		for(var i=0; i<selectedTable.length;i++){
			if(selectedTable[i].checked==true){
				//获取选框旁边的id值
				var currentid = $(selectedTable[i]).parent().next().text();
				arrCheckedTableIDs.push(currentid);
			};
		}
		//修改确认框的提示文本,弹出确认框
		if(arrCheckedTableIDs.length !="0"){
			$("#removeModalTableName").text("所有已选");
			$("#removeModal").modal();
		}
	});
	// 确认删除按钮
	$("#btnRemoveTableForm").click(function(event){
		event.preventDefault();
		// 隐藏删除提示框
		$("#removeModal").modal("hide");
		removeTable(arrCheckedTableIDs);
	})
	
	// 刷新结果按钮(展示所有餐桌)
	$("#btnRefreshTable").click(function(event){
		event.preventDefault();
		refreshTable();
	});
	
	// 餐桌表格的全选按钮(全部勾选或取消)
	$(document).on("click","#selectAll",function(){
		var selectedTables = $(".selectedTable");
		if($(this)[0].checked==true){			//已选
			for(var i=0;i<selectedTables.length;i++){
				selectedTables[i].checked=true; //全部打钩
			}
		}else{//未选
			for(var i=0;i<selectedTables.length;i++){
				selectedTables[i].checked=false;//全部取消勾
			}
		}	
	})

	
})

// 展示所有桌子信息
function refreshTable(){
	$.ajax({
		url:"getTable",
		type:"post",
		data:"",
		dataType:"json",
		success:function(data){
			refreshTableCore(data);
		}
	})
}

// 更新桌子表信息
function refreshTableCore(data){
	$("#updateTable tbody tr").remove();
	for (var i=0;i<data.length;i++) {
		$("#updateTable").append(
		"<tr><td><input type=\"checkbox\" class=\"selectedTable\" name=\"\" id=\"\" value=\"\" /></td>"
		+"<td>"+data[i].id+"</td>"
		+"<td>"+data[i].tname+"</td>"
		+"<td>"+data[i].num+"</td>"
		+"<td>"+data[i].status+"</td>"
		+"<td>"+data[i].remark+"</td>"
		+"<td><a href=\"#\" class=\"btnUpdateTable\" tableID="+data[i].id+"><span class=\"glyphicon glyphicon-edit\"></span></a>&nbsp;&nbsp;"
				+"<a href=\"#\" class=\"btnRemoveTable\" tableID="+data[i].id+" tableName="+data[i].tname+"><span class=\"glyphicon glyphicon-remove-circle\"></span></a>"
		+"</td></tr>"
		)
	}
}

// 删除桌子
function removeTable(removeTableIDs){
	$.ajax({
		url:"removeTable",
		type:"post",
		contentType: 'application/json;charset=UTF-8',
		data:JSON.stringify(removeTableIDs),
		dataType:"json",
		success:function(data){
			refreshTable();
		},
	});
}




