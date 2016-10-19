$(document).ready(function(){

	$('.menu').hide();

	$('#openmenu').click(function(){
		$(".menu").fadeIn("slow");
	});
    
    $('#closemenu').click(function(){
        $(".menu").hide("slow");
    });
    
});
