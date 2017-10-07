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
	    $(this).find("img").attr("src","images/Jana.jpg");
	});

	$("div#Grant").hover(function(){
		$(this).find("span.hide-stuff").show();
	    $(this).find("img").attr("src","images/walk.gif");
	    }, function(){
	    $(this).find("span.hide-stuff").hide();
	    $(this).find("img").attr("src","images/Grant.jpg");
	});

	$("div#JP").hover(function(){
		$(this).find("span.hide-stuff").show();
	    $(this).find("img").attr("src","images/stab.gif");
	    }, function(){
	    $(this).find("span.hide-stuff").hide();
	    $(this).find("img").attr("src","images/JP.jpg");
	});

	$("div#Joel").hover(function(){
		$(this).find("span.hide-stuff").show();
	    $(this).find("img").attr("src","images/bike.gif");
	    }, function(){
	    $(this).find("span.hide-stuff").hide();
	    $(this).find("img").attr("src","images/Joel.jpg");
	});

	$("div#Peter").hover(function(){
		$(this).find("span.hide-stuff").show();
	    $(this).find("img").attr("src","images/stuck.gif");
	    }, function(){
	    $(this).find("span.hide-stuff").hide();
	    $(this).find("img").attr("src","images/Peter.jpg");
	});
	
	$("div#dash").mouseover(function(){
		$(this).find("img").attr("src","images/dashWhiteGlow.png");
	});
	$("div#dash").mouseout(function(){
		$(this).find("img").attr("src","images/dashWhite.png");
	});
	
	$("div#telekinesis").mouseover(function(){
		$(this).find("img").attr("src","images/telekinesisWhiteGlow.png");
	});
	$("div#telekinesis").mouseout(function(){
		$(this).find("img").attr("src","images/telekinesisWhite.png");
	});
	
	$("div#possess").mouseover(function(){
		$(this).find("img").attr("src","images/possessWhiteGlow.png");
	});
	$("div#possess").mouseout(function(){
		$(this).find("img").attr("src","images/possessWhite.png");
	});
	
	$("div#stun").mouseover(function(){
		$(this).find("img").attr("src","images/freezeWhiteGlow.png");
	});
	$("div#stun").mouseout(function(){
		$(this).find("img").attr("src","images/freezeWhite.png");
	});

	

});

