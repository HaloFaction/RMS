$(function(){
	// 列表的初始隐藏
	$(".waiterDropdown").hide();
	$(".cookDropdown").hide();
	$(".reportDropdown").hide();
	// 列表的点击展开--服务员视图
	$("#btnWaiterDropdown").on("click","[data-stopPropagation]",function(e){
		e.stopPropagation();
		if($(".waiterPackup").is(":hidden")){
			$(".waiterPackup").show();
			$(".waiterDropdown").hide();
		}else{
			$(".waiterDropdown").show();
			$(".waiterPackup").hide();
		}
	})
	// 列表的点击展开--厨师视图
	$("#btnCookDropdown").on("click","[data-stopPropagation]",function(e){
		e.stopPropagation();
		if($(".cookPackup").is(":hidden")){
		$(".cookPackup").show();
		$(".cookDropdown").hide();
		}else{
		$(".cookPackup").hide();
		$(".cookDropdown").show();
		}
	})
	// 列表的点击展开--报表管理
	$("#btnReportDropdown").on("click","[data-stopPropagation]",function(e){
		e.stopPropagation();
		if($(".reportPackup").is(":hidden")){
		$(".reportPackup").show();
		$(".reportDropdown").hide();
		}else{
		$(".reportPackup").hide();
		$(".reportDropdown").show();
		}
	})
})

