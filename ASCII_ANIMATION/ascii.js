// Author: Jasser Dhaouadi 
// Homework: ASCII ANIMATION

"use strict";

var integer = 0;
var animation;
var speed = 250;
var startAnimation;

function disableButton(id1,id2){
	document.getElementById(id1).disabled = true;
	document.getElementById(id2).disabled = false;
}

function getAnimation(){
	if(document.getElementById('start').disabled == false){
		document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
	}
}

function updateSpeed(){
	if(speed == 250){
		speed = 50;
	}else{
		speed = 250;
	}
	if(document.getElementById('start').disabled == true){
		clearInterval(startAnimation);
		startAnimation = setInterval(function(){ update(animation, animation.length) }, speed);
	}
}

function beginAnimation(){
	document.getElementById("animation").disabled = true; 
	if(document.getElementById('start').disabled == true){
		document.getElementById("text-area").value = ANIMATIONS['blank'];
		animation = ANIMATIONS[document.getElementById("animation").value];
		animation = animation.split("=====\n");
		startAnimation = setInterval(function(){ update(animation, animation.length) }, speed);
	}
	
}

function update(animation, length){
	if(integer < length){
		document.getElementById("text-area").value = animation[integer];
		integer = integer + 1;
	}else{
		integer = 0;
	}
}

function stopAnimation(){
	clearInterval(startAnimation);
	startAnimation = null;
    document.getElementById("text-area").value = ANIMATIONS[document.getElementById("animation").value];
	integer = 0;
	document.getElementById("animation").disabled = false; 
}

function changeSize(){
	if(document.getElementById("fontsize").value == 'Tiny'){
		var size = '7pt';
	}
	
	if(document.getElementById("fontsize").value == 'Small'){
		var size = '10pt';
	}
	
	if(document.getElementById("fontsize").value == 'Medium'){
		var size = '12pt';
	}
	
	if(document.getElementById("fontsize").value == 'Large'){
		var size = '16pt';
	}
	
	if(document.getElementById("fontsize").value == 'Extra Large'){
		var size = '24pt';
	}
	
	if(document.getElementById("fontsize").value == 'XXL'){
		var size = '32pt';
	}
	document.getElementById("text-area").style.fontSize = size;
}