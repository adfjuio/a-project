
function click1(){
  var y= document.getElementById("click1")
     var z=document.getElementById("anim1")                        
  var x= document.getElementById("txt1")
  if(x.style.display=="none"){
    x.style.display="block";
    z.style.animation = 'none';

			

    z.offsetHeight; 


    z.style.animation = null; 
    y.style.backgroundColor="orange";}
  else{
    x.style.display="none";
    y.style.backgroundColor="#303030";}
  }
