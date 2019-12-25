/*
* @Author: Lenovo
* @Date:   2019-12-24 16:03:21
* @Last Modified by:   zhanxianan
* @Last Modified time: 2019-12-25 13:51:27
*/
var width = parseInt(window.screen.availWidth) - 30;
var lwidth = -width;
document.getElementsByClassName("box")[0].style.width = width + "px";
document.getElementsByClassName("slider")[0].style.width = width * 7 + "px";
document.getElementsByClassName("slider")[0].style.left = lwidth + "px";
document.getElementsByClassName("slide")[0].style.width = width + "px";
document.getElementsByClassName("slide")[1].style.width = width + "px";
document.getElementsByClassName("slide")[2].style.width = width + "px";
document.getElementsByClassName("slide")[3].style.width = width + "px";
document.getElementsByClassName("slide")[4].style.width = width + "px";
document.getElementsByClassName("slide")[5].style.width = width + "px";
document.getElementsByClassName("slide")[6].style.width = width + "px";
document.getElementsByClassName("bottom")[0].style.width = width +"px";
var text2 = document.getElementsByClassName("text2")[0];
var text = document.getElementsByClassName("cjhyytxt")[0];
var li = document.getElementsByTagName("li");
var time = 0;
var flag = 0;
var flag1 = 0;
var flag2 = 0;
var flag3 = 0;
var box = document.getElementsByClassName("box")[0];
var slider = document.getElementsByClassName("slider")[0];
var index = 1;
var isMoving = false;
var left = document.getElementById("left");
var right = document.getElementById("right");
var ybswtxt1 = document.getElementsByClassName("ybswtxt1");
var wsndtxt1 = document.getElementsByClassName("wsndtxt1");
var zshytxt1 = document.getElementsByClassName("zshytxt1");
var text1 = document.getElementsByClassName("text1");
var LI = text1[0].children[0];
var hdsy = document.getElementsByClassName("hdsy")[0];
hdsy.onclick = function(){
	window.location.href = "..//HKX/idol.html";
}
var bigbox = document.getElementsByClassName("big")[0];
LI.onmouseover = (function(){
	return function(){
		this.onmousemove = function(evt){
			var e = evt || event;
			var x = e.clientX;
			console.log(x);
			var y = e.clientY;
			if(x >= (document.body.offsetWidth - bigbox.offsetWidth)) {
				bigbox.style.left = x + 10 - bigbox.offsetWidth +"px";
				bigbox.style.top = y + 10 +"px";
			} else {
				bigbox.style.left = x + 10 +"px";
				bigbox.style.top = y + 10 + "px";
			}
		}
		bigbox.style.display = "block";
			
		var oImg = document.createElement("img");
		oImg.src = "images/71.jpg";
		bigbox.innerHTML = "";
		bigbox.appendChild(oImg);
	}
})();
LI.onmouseout = function(){
	bigbox.style.display = "none";
}
window.onscroll = function(){
	var h = parseInt(document.body.scrollTop || document.documentElement.scrollTop);
	if(h >= 550 && time != 1){
		time = 1;
		var timer = setInterval(function(){
			var speed = 20;
			var right = parseInt(getStyle(text2,"right")) + speed;
			text2.style.right = right+"px";
			if(right == 0){
				clearInterval(timer);
			}
		},40);
	}
	if(h >= 1400 && flag2 == 0){
		var i = 0;
		flag2 = 1;
		var timer2 = setInterval(function(){
			if(i==wsndtxt1.length){
				clearInterval(timer2);
			}
			else{
				animate(wsndtxt1[i],{opacity:100});
				i++;
			}
		},400);
	}
	if(h >=1900 &&flag1 == 0){
		var i = 0;
		flag1 = 1;
		var timer1 = setInterval(function(){
			if(i==ybswtxt1.length){
				clearInterval(timer1);
			}
			else{
				animate(ybswtxt1[i],{opacity:100});
				i++;
			}
		},400);
	}
	if(h >= 2500 && flag3 == 0){
		var i = 0;
		flag1 = 1;
		var timer1 = setInterval(function(){
			if(i==zshytxt1.length){
				clearInterval(timer1);
			}
			else{
				animate(zshytxt1[i],{opacity:100});
				i++;
			}
		},400)
	}
	if(h >= 2900 && flag!=1){
		flag = 1;
		var timerr = setInterval(function(){
			var speed = 20;
			var right = parseInt(getStyle(text,"right")) + speed;
			text.style.right = right +"px";
			if(right == 0){
				clearInterval(timerr);
			}
		},40);
	}
}
li[1].onclick = function(){
	window.location.href = "#div1";
}
li[2].onclick = function(){
	window.location.href = "#div2";
}
li[3].onclick = function(){
	window.location.href="#div3";
}
function next(){
	if(!isMoving){
		isMoving = true;
		index++;
		animate(slider,{left:lwidth*index},function(){
			if(index === 6){
				slider.style.left = lwidth + "px";
				index = 1;
			}
			isMoving = false;
		});
	}
}
function prev(){
	if(isMoving){
		return;
	}
	isMoving = true;
	index--;
	animate(slider,{left:lwidth*index},function(){
		if(index===0){
			slider.style.left=lwidth*5 + "px";
			index = 5;
		}
		isMoving = false;
	});
}
var Timer = setInterval(next,2000);
box.onmouseover = function(){
	animate(left,{opacity:50});
	animate(right,{opacity:50});
	clearInterval(Timer);
}
box.onmouseout = function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
	Timer = setInterval(next,2000);
}
right.onclick = next;
left.onclick = prev;