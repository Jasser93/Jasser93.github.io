// Author: Jasser Dhaouadi
// Student ID: 610099 
// Lab : Clean Screen 

var timer;
window.onload = function() {
    $('.circle')[0].onclick = remove;
    $('#btn')[0].onclick = modify;
}
function remove(){
	let circleNbr = $(".circle").length;
	for (let i =0; i<circleNbr;i++){
		$('.circle')[i].style.display = "none";
	}
	
}
function modify(){
	clearInterval(timer);
	$( ".circle" ).remove();
	// get inputs  
	let newWidth = $('#width').val();
	newWidth = newWidth +"px";
	let newGrowthAmount = $('#growthAmount').val();
	newGrowthAmount = parseInt(newGrowthAmount);
	let newGrowthRate = $('#growthRate').val();
	newGrowthRate = parseInt(newGrowthRate)
	
	// circles 
	let nbrCircles = $('#CirclesNBR').val();
	nbrCircles = parseInt(nbrCircles);
	
	
	for (let i =0; i<nbrCircles; i++){
	  let newCircle = $("<div>");
	  $('#CirclesContainer').append(newCircle);
	  $('#CirclesContainer div').addClass("circle");
	  $('.circle')[i].style.width = newWidth;
	  $('.circle')[i].style.height = newWidth;
	  $('.circle')[i].onclick = remove;
	}
   

	let circleNbr = $(".circle").length;
	for (let i =0; i<circleNbr;i++){
		$('.circle')[i].style.display = "inline-block";
	}
	timer = setInterval(biggerCircle, newGrowthRate, newGrowthAmount  );


}

timer = setInterval(biggerCircle, 250, 10);
function biggerCircle(amount){
	
	
	let circleNbr = $(".circle").length;
	let width = $(".circle")[0].clientWidth;
	for (let i =0; i<circleNbr;i++){
		
		width = parseInt(width);
		newWidth = width + amount;
		let radius = newWidth / 2;
		newWidth = newWidth +"px";
		radius = radius +"px";
	
	
	  $(".circle")[i].style.width = newWidth;
	  $(".circle")[i].style.height = newWidth;
	  $(".circle")[i].style.borderRadius  = radius;
	}
	
}