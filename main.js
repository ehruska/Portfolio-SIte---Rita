// $('.div1').on("mouseenter", function(){
// 	$(this).css(
// 		"background-color", "yellow"
// 		);
// })

$(document).on("ready", function(){
var Status = "Boutique";

	$('.div1').on("click", function(){
		if(Status === "Boutique"){
			$(this).css(
				"background-color", "#808285"
				);
			$('.div2').css(
				"background-color", "#4A4A4C"
				);
			$('.seven').text('Studio');
			$('.ten').text('Boutique');
			$('.table2').hide();
			Status = "Studio";
		}
		else {
			$(this).css(
				"background-color", "#4A4A4C"
				);
			$('.div2').css(
				"background-color", "#808285"
				);
			$('.seven').text('Boutique');
			$('.ten').text('Studio');
			$('.table2').show();
			Status = "Boutique";

		}
		
	})
$('.work1').on('click', function(e){
	e.stopPropagation();
	$('.table2').slideUp();

	$('.div3').css("padding-left", "260px").append('<table><tr><td><img src="1.jpg" style="width:512px;height:380px"></td></tr><tr><td><img src="1.jpg" style="width:512px;height:380px"></td></tr><tr><td><img src="1.jpg" style="width:512px;height:380px"></td></tr><tr><td><img src="1.jpg" style="width:512px;height:380px"></td></tr></table>');
		

	
})
	

		
})



