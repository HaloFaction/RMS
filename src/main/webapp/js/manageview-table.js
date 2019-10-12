$(function(){
	var removeTableID;
	
	// 添加餐桌按钮
	$("#btnAddTable").click(function(){
		$("#modalTitle").text("添加餐桌");
		$("#btnUpdateTableForm").hide();
		$("#btnAddTableForm").show();
		$("#addAndUpdateModal").modal();
	});	
	// 提交添加餐桌表单的按钮
	$("#btnAddTableForm").click(function(){
		
	})
	
	// 修改单个餐桌按钮
	$(".btnUpdateTable").click(function(){
		var tableID = $(this).attr("tableID");
		$("#modalTitle").text("修改餐桌");
		$("#btnAddTableForm").hide();
		$("#btnUpdateTableForm").show();
		$("#addAndUpdateModal").modal();
	});
		
	// 删除多选餐桌按钮
	$("#btnRemoveTable").click(function(){
		$("#removeModal").modal();
	});
	
	// 删除单个餐桌按钮
	$(".btnRemoveTable").click(function(){
		removeTableID = $(this).attr("tableID");
		var tableName = $(this).attr("tableName");
		$("#removeModalTableName").text(tableName);
		$("#removeModal").modal();
	});
	// 确认删除按钮
	$("#btnRemoveTableForm").click(function(){
		alert(removeTableID+"已被删除");
		$.ajax({
			
		})
	})
	
})



// 查找餐桌按钮
$("#btnSearchTable").click(function(){
	
});
// 刷新结果按钮
$("#btnRefreshTable").click(function(){
	
});


