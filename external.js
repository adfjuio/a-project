window.onscroll = function() {scrollFunction()};

function scrollFunction() {

  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {

    document.getElementById("navbar").style.boxShadow="0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)";

  } else {

    document.getElementById("navbar").style.boxShadow="none";

  }

}

function click1(){document.getElementById("click1").style.backgroundColor="dodgerblue";}
function contact(){document.getElementById("contact").style.backgroundColor="dodgerblue";}
	
	  

function menu(){var z=document.getElementById("contact")
	
var a =document.getElementById("menu1")
var y=document.getElementById("menu")
		


	
	 var x=document.getElementById("click1")
if(x.style.top =="0px"){a.src="https://www.linkpicture.com/q/IMG_20210619_070818.jpg";
	a.innerText="Menu";
	z.style.top="-50px";
	
	y.style.backgroundColor="#303030";
			
	
	       x.style.top="-50px";
			
	       }else

{a.src="https://www.linkpicture.com/q/PicsArt_06-19-08.31.30.jpg";
	a.innerText="Back";
	z.style.top="0px";
	
	y.style.backgroundColor="red";
		       x.style.top="0px";}}
	
	

	

	

	

	

	

	

	
	
