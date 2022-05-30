$('input[name="radio1"]').click(function(){
	$(".image").css({"backgroundImage": "url(" + this.value + ")"});
});
$('input[name="radio2"]').click(function(){
	$(".image2").css({"backgroundImage": "url(" + this.value + ")"});
});
$('input[name="radio3"]').click(function(){
	$(".image3").css({"backgroundImage": "url(" + this.value + ")"});
});