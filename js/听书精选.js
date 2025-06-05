var zz=document.querySelectorAll(".zz");
// var zz=document.getElementsByClassName("zz");
var tt=document.querySelector(".tt");
// var tt=document.getElementsByClassName(".tt")[0];
var tpsrc=["img/听书推荐banner/1.jpg","img/听书推荐banner/2.jpg","img/听书推荐banner/3.jpg","img/听书推荐banner/4.jpg","img/听书推荐banner/5.jpg"];
var s=0;
function lun(n){
	for(var i=0;i<zz.length;i++){
		zz[i].style.color="black";
	}
	zz[n].style.color="red";
	tt.src=tpsrc[n];
	s=n; 
}
setInterval(function(){
	lun(s);
	s++;
	if(s>=tpsrc.length){s=0;}
},3000);