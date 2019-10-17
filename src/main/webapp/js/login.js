$(function(){
	$("#submit").click(function(){
		$.ajax({
			type:"post",
			url:"login/"+$("#username").val()+"/"+$("#password").val(),
			data:{},
			dataType:"json",
			success:function(data){
				if(data == null){
					alert("登录失败");
					location.reload();
				}else{
					if(data.role == "管理员"){
						location.href = "main.html?role="+data.role;
					}else if(data.role == "厨师"){
						location.href = "cookview.html?role="+data.role;
					}else if(data.role == "服务员"){
						location.href = "empview-table.html?role="+data.role;
					}
				}
			}
		})
	})
})

