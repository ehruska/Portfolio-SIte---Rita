// $('.div1').on("mouseenter", function(){
// 	$(this).css(
// 		"background-color", "yellow"
// 		);
// })
// 
var Status = "Boutique";

$(document).on("ready", function(){


	$('.div1').on("click", function(){
		if(Status === "Boutique"){
			$(this).css(
				"background-color", "#808285"
				);
			$('.div2').css(
				"background-color", "#4A4A4C"
				);
			$('.table3').hide()
			$('.div3').css("padding", "20px")
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
			$('.table3').hide()
			$('.div3').css("padding", "20px")
			$('.seven').text('Boutique');
			$('.ten').text('Studio');
			$('.table2').show();
			Status = "Boutique";

		}
		
	})
$('.work1').on('click', function(e){
	e.stopPropagation();
	$('.table2').hide();

	$('.div3').css("padding-left", "260px").append('<table class="table3"><tr><td><img src="assets/1.jpg" style="width:512px;height:380px"></td></tr><tr><td><img src="assets/1.jpg" style="width:512px;height:380px"></td></tr></table>');
		

	
})
	
$('.ten, .one').on('click', function(){
	if(Status ==="Studio"){
		console.log('do nothing')
	}else{
		$('.div3').css("padding", "20px")
	$('.table2').show();
	$('.table3').hide();
	}
	
		
	})
})



