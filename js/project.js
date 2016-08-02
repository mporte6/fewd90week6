$(document).ready(function(){

	$("nav a").click(function(){
		$("nav a.current").removeClass("current");
		$(this).addClass("current");
	});	


	// when "submit" is clicked, find the div with the id
	// that matches the "a" data-ipsum with the current class applied

	// click ID submit 
	// on click get data-ipsum of .current
	// console.log data-ipsum of .current
	// select id ipsumType
	// add class open to ipsumType
	$("#submit").click(function(){
		var ipsumType = $("nav a.current").attr("data-ipsum");

		// removing class open from all ipsum.open
		$(".ipsum.open").removeClass("open");
		
		//adding class open to id ipsum type
		$("#"+ ipsumType).addClass("open");

		//get the value from the input id "paragraphs"
		var inputAmt = $("#paragraphs").val();

		//return the same number of paragraphs as the value in the input
		$(".ipsum.open p").slice(inputAmt).css("display", "none");

	});	

	//on focus in paragraphs input, clear value
	$("input:text").focus(function(){
		$(this).val("");
		$(".ipsum.open").hide();




		
		
	});

	
});









	//Go into the matched div and find the paragraphs within

	// Get the value from the input "paragraphs" and display 
	//(.open) the same number of paragraphs from the matched div using a slide

	//when clicking back into the input, the "p"'s
	//are hidden and the input value is hidden
