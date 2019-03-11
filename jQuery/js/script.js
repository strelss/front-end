$(document).ready(function(){

	$(".contact").on("click", function(){
		$(".overlay").fadeIn(1500);	
		$(".modal").slideDown(1500);		
	});

	$(".close").on("click", function(){
		$(".overlay").fadeOut(1500);	
		$(".modal").slideUp(1500);
	});

})