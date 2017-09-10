$(document).ready(function(){

	if($("#start_page").length){


		var flicker = setInterval(lightFlicker, 1000);

		function lightFlicker() {
			var change = document.getElementById("light");
			var enter = document.getElementById("enter");
			var next = Math.floor((Math.random() * 1000) + 500);

			if(change.style.display === 'none'){
				change.style.display = 'block';
			}
			else{
				change.style.display = 'none';
			} 

			clearInterval(flicker);
			flicker = setInterval(lightFlicker, next);
		    
		} 
	}

	if($("#team_page").length){
		$("span.hide-stuff").hide();
	}

	$("div#Jana").hover(function(){
		$(this).find("span.hide-stuff").show();
	    $(this).find("img").attr("src","images/wet.gif");
	    }, function(){
	    $(this).find("span.hide-stuff").hide();
	    $(this).find("img").attr("src","images/crap.png");
	});

	$("div#Grant").hover(function(){
		$(this).find("span.hide-stuff").show();
	    $(this).find("img").attr("src","images/walk.gif");
	    }, function(){
	    $(this).find("span.hide-stuff").hide();
	    $(this).find("img").attr("src","images/crap.png");
	});

	$("div#JP").hover(function(){
		$(this).find("span.hide-stuff").show();
	    $(this).find("img").attr("src","images/stab.gif");
	    }, function(){
	    $(this).find("span.hide-stuff").hide();
	    $(this).find("img").attr("src","images/crap.png");
	});

	$("div#Joel").hover(function(){
		$(this).find("span.hide-stuff").show();
	    $(this).find("img").attr("src","images/bike.gif");
	    }, function(){
	    $(this).find("span.hide-stuff").hide();
	    $(this).find("img").attr("src","images/crap.png");
	});

	$("div#Peter").hover(function(){
		$(this).find("span.hide-stuff").show();
	    $(this).find("img").attr("src","images/stuck.gif");
	    }, function(){
	    $(this).find("span.hide-stuff").hide();
	    $(this).find("img").attr("src","images/crap.png");
	});

	

});

