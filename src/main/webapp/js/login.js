

$(function(){
	$("#login").click(function(){
		if($("#userid").val()!=null&&$("#password").val()!=null){
		$.ajax({
			type:"post",
			url:"login",
			data:$("#f1").serialize(),
			datatype:"json",
			sunccess:function(data){
				if(User!=null){
					alert("登录成功")
				}else{
					alert("登录失败")
				}
			}
		})
		}else{
			alert("用户名或密码不能为空");
		}
		
	})
	
	
})
