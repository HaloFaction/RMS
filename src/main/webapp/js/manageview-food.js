$(function() {
				// 公共部分main
				$.getScript("js/main.js");
				$("#nav-list").load("main.html .nav-list", function() {
					$("#pageChineseName").html("菜品管理");
				});
				$("#nav-end").load("main.html .nav-end", function() {
					$("#userName").html("豆腐");
				});
				// 公共部分--止
				
				getFoodList();
			
				function getFoodList(){
					
				$.ajax({
					type:"post",
					url:"getAllFood",
					data:{},
					dataType:"json",
					success:function(data){
						$("#main").empty();
						for(var i=0;i<data.length;i++){
						
						$("#main").append("<div class='col-md-3'><a data-id='"+data[i].id+"' data-name='"+data[i].fname+"' data-pic='"+data[i].pic+"' data-kind='"+data[i].kind+"' data-fkname='"+data[i].foodkind.fkname+"' data-price='"+data[i].price+"' href='javacript:void(0);' class='glyphicon glyphicon-remove-circle'></a><img src='img/"+data[i].pic+".jpg'/><br><span class='.active'>"+data[i].fname+"</span><br><span class='.active'>"+data[i].price+"元</span></div>")
						}
					}
					
				})
			};
		
			
				$("#all").click(function(){
					$("#upic img").remove();
					$("#updatefood").hide();
					$("#insertfood").hide();
					getFoodList();
					$(this).siblings('li').removeClass('active');  
			        $(this).addClass('active');                    
				});
				$("#hot").click(function(){
					$("#upic img").remove();
					$("#updatefood").hide();
					$("#insertfood").hide();
					$(this).siblings('li').removeClass('active');  
			        $(this).addClass('active');                   
					$.ajax({
						type:"post",
						url:"getHotFood",
						data:{},
						dataType:"json",
						success:function(data){
							
							$("#main").empty();
							for(var i=0;i<data.length;i++){
							
							$("#main").append("<div class='col-md-3'><a data-id='"+data[i].id+"' data-name='"+data[i].fname+"' data-pic='"+data[i].pic+"' data-kind='"+data[i].kind+"' data-fkname='"+data[i].foodkind.fkname+"' data-price='"+data[i].price+"' href='javacript:void(0);' class='glyphicon glyphicon-remove-circle'></a><img src='img/"+data[i].pic+".jpg'/><br><span class='.active'>"+data[i].fname+"</span><br><span class='.active'>"+data[i].price+"元</span></div>")
							}
						}
					})
				});
				$("#ice").click(function(){
					$("#upic img").remove();
					$("#updatefood").hide();
					$("#insertfood").hide();
					$(this).siblings('li').removeClass('active');  // 删除其兄弟元素的样式
			        $(this).addClass('active');                    // 为点击元素添加类名
					$.ajax({
						type:"post",
						url:"getIceFood",
						data:{},
						dataType:"json",
						success:function(data){
							$("#main").empty();
							for(var i=0;i<data.length;i++){
							
							$("#main").append("<div class='col-md-3'><a data-id='"+data[i].id+"' data-name='"+data[i].fname+"' data-pic='"+data[i].pic+"' data-kind='"+data[i].kind+"' data-fkname='"+data[i].foodkind.fkname+"' data-price='"+data[i].price+"' href='javacript:void(0);' class='glyphicon glyphicon-remove-circle'></a><img src='img/"+data[i].pic+".jpg'/><br><span class='.active'>"+data[i].fname+"</span><br><span class='.active'>"+data[i].price+"元</span></div>")
							}
						}
					})
				});
				$("#sweet").click(function(){
					$("#upic img").remove();
					$("#updatefood").hide();
					$("#insertfood").hide();
					$(this).siblings('li').removeClass('active'); 
			        $(this).addClass('active');     
			        $("#main").empty();
			        $.ajax({
						type:"post",
						url:"getSweetFood",
						data:{},
						dataType:"json",
						success:function(data){
							$("#main").empty();
							for(var i=0;i<data.length;i++){
							
							$("#main").append("<div class='col-md-3'><a data-id='"+data[i].id+"' data-name='"+data[i].fname+"' data-pic='"+data[i].pic+"' data-kind='"+data[i].kind+"' data-fkname='"+data[i].foodkind.fkname+"' data-price='"+data[i].price+"' href='javacript:void(0);' class='glyphicon glyphicon-remove-circle'></a><img src='img/"+data[i].pic+".jpg'/><br><span class='.active'>"+data[i].fname+"</span><br><span class='.active'>"+data[i].price+"元</span></div>")
							}
						}
					})
				});
				$("#sope").click(function(){
					$("#upic img").remove();
					$("#updatefood").hide();
					$("#insertfood").hide();
					$(this).siblings('li').removeClass('active');  
			        $(this).addClass('active'); 
			        $("#main").empty();
			        $.ajax({
						type:"post",
						url:"getSopeFood",
						data:{},
						dataType:"json",
						success:function(data){
							$("#main").empty();
							for(var i=0;i<data.length;i++){
							
							$("#main").append("<div class='col-md-3'><a data-id='"+data[i].id+"' data-name='"+data[i].fname+"' data-pic='"+data[i].pic+"' data-kind='"+data[i].kind+"' data-fkname='"+data[i].foodkind.fkname+"' data-price='"+data[i].price+"' href='javacript:void(0);' class='glyphicon glyphicon-remove-circle'></a><img src='img/"+data[i].pic+".jpg'/><br><span class='.active'>"+data[i].fname+"</span><br><span class='.active'>"+data[i].price+"元</span></div>")
							}
						}
					})
				});
				$("#drink").click(function(){
					$("#upic img").remove();
					$("#updatefood").hide();
					$("#insertfood").hide();
					$(this).siblings('li').removeClass('active');  
			        $(this).addClass('active'); 
			        $("#main").empty();
			        $.ajax({
						type:"post",
						url:"getDrinkFood",
						data:{},
						dataType:"json",
						success:function(data){
							$("#main").empty();
							for(var i=0;i<data.length;i++){
							$("#main").append("<div class='col-md-3'><a data-id='"+data[i].id+"' data-name='"+data[i].fname+"' data-pic='"+data[i].pic+"' data-kind='"+data[i].kind+"' data-fkname='"+data[i].foodkind.fkname+"' data-price='"+data[i].price+"' href='javacript:void(0);' class='glyphicon glyphicon-remove-circle'></a><img src='img/"+data[i].pic+".jpg'/><br><span class='.active'>"+data[i].fname+"</span><br><span class='.active'>"+data[i].price+"元</span></div>")
							}
						}
					})
				});
				
				$(document).on("mouseover","img",function(){
				
					$(this).siblings('a').show();
					
				});
				$(document).on("mouseleave",".col-md-3",function(){
					$(".glyphicon").hide();
				});
				
				$(document).on("click",".glyphicon",function(){
					if(confirm("是否确认删除"+$(this).attr("data-name")+"？")){
					$.ajax({
						type:"post",
						url:"deleteFoodInfo/"+$(this).attr("data-id")+"/"+$(this).attr("data-pic"),
						data:{},
						dataType:"json",
						success:function(data){
							alert(data.result);
							getFoodList();
						}
					}) 
					}
				});
				
				$(document).on("click","#main img",function(){
					$("#main").empty();
					$("#updatefood").show();
					
					var hh=$(this).siblings('a');
					$("#id").val(hh.attr("data-id"));
					$("#ufname").val(hh.attr("data-name"));
					$("#ukind").val(hh.attr("data-kind"));
					$("#ufkname").val(hh.attr("data-fkname"));
					$("#uupic").val(hh.attr("data-pic"));
					$("#upic").append("<img src='img/"+hh.attr("data-pic")+".jpg'/>");
					$("#uprice").val(hh.attr("data-price"));
					

				})
				$("#changefoodkind").click(function(){
					$("#ukind").remove();
					$("#ufkname").remove();
					$(this).hide();
					$("#kind2").show();
					$.ajax({
						type:"post",
						url:"getFoodKind",
						data:{},
						dataType:"json",
						success:function(data){
							$("#kind2 option:not(:first)").remove();
							for(var i=0;i<data.length;i++)
							$("#kind2").append("<option value='"+data[i].id+"'>"+data[i].fkname+"</option>");
						}
					})
				})
				$("#changepic").click(function(){
					$("#upic").hide();
					$("#ff2").show();
					$(this).hide();
				})
				
				$("#insert").click(function(){
					$("#updatefood").hide();
					$("#main").empty();
					$("#insertfood").show();
					$.ajax({
						type:"post",
						url:"getFoodKind",
						data:{},
						dataType:"json",
						success:function(data){
							$("#kind option:not(:first)").remove();
							for(var i=0;i<data.length;i++)
							$("#kind").append("<option value='"+data[i].id+"'>"+data[i].fkname+"</option>");
						}
					})
				});
				$("#subm").click(function(){
					var fd = new FormData(document.getElementById("f1"));
					$.ajax({
						type:"post",
						url:"insertFoodInfo",
						data:fd,
						dataType:"json",
						processData: false,     
				        contentType: false,
						success:function(data){
							alert(data.result);
							getFoodList();
							$("input[type=reset]").trigger("click");
							$("#insertfood").hide();
						}	
					})
				})
				
				$("#usubm").click(function(){
					var formdata=new FormData(document.getElementById("f2"));
					$.ajax({
						type:"post",
						url:"updateFoodInfo",
						data:formdata,
						dataType:"json",
						processData:false,
						contentType:false,
						success:function(data){
							alert(data.result);
							getFoodList();
							$("input[type=reset]").trigger("click");
							$("#updatefood").hide();
							$("#upic").show();
							$("#ff2").hide();
							$("#changepic").show();
							$("#upic img").remove();
						}
					})
					
					
				})
				
				
				
				
			})