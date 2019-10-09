$(document).ready(function(){
	$(document).on("mouseover",function(event){
		$("#moveme").css({"margin-left":event.pageX-128,"margin-top":event.pageY-128})

	});
	$("#moveme").on("click",function(event){
		$(this).animate({
			"bottom": 0 + 128,
			"left": 0,
		},2000,"linear",function() {$(this).fadeOut(1000).fadeIn(1000)} );
	});
});