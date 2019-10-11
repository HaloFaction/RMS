$(function(){
	$("#submit").click(function(){
		$.ajax({
			type:"post",
			url:"login/"+$("#username").val()+"/"+$("#password").val(),
			data:{},
			dataType:"json",
			success:function(data){
				
			}
		})
	})
})