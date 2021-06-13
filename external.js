
function click1(){
  var y= document.getElementById("click1")
     var z=document.getElementById("anim1")                        
  var x= document.getElementById("txt1")
  var a=document.getElementById("txt2")                        

  var b= document.getElementById("txt3")
  if(x.style.display=="none"){
    x.style.display="block";
    z.style.animation = 'none';
   a.style.display="block";
			

    z.offsetHeight; 

    b.style.display="block";
    z.style.animation = null; 
    y.style.backgroundColor="orange";}
  else{
	  a.style.display="none";
	  b.style.display="none";
	
    x.style.display="none";
    y.style.backgroundColor="#303030";}
  }


function menu(){var y=document.getElementById("menu")
	
	 var x=document.getElementById("click1")
if(x.style.top =="0px"){y.style.innerText="Menu";
	y.style.backgroundColor="#303030";
			
	
	       x.style.top="-50px";
			
	       }else

{y.style.innerText="back";
	y.style.backgroundColor="red";
		       x.style.top="0px";}}
	
	
	
