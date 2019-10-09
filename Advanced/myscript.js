$(document).ready(function(){
	$(document).on("mouseover",function(event){
	$("#moveme").css({"margin-left":event.pageX-128,"margin-top":event.pageY-128})



	});

	$("#moveme").on("click",function(){
		$(this).animate({
						"paddingTop": '+=300'
		},2000,"linear",function() {$(this).fadeOut(1000).fadeIn(1000)    

		});





	});



});