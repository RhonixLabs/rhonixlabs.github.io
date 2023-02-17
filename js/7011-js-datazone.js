$(document).ready(function(){
	$(".mob_nav").click(function(){
		$(this).toggleClass("open");
		$(".header_menu").toggleClass("view");
	});

	$(".header_user").click(function() {
		$(".user_drop").toggleClass("view");
		$(".shadow_layer").toggleClass("view");
	});
	$(".shadow_layer").click(function() {
		$("div").removeClass("view");
		$("ul").removeClass("view");
	});
});