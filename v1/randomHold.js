gameInfo = {
  title: "Random hold",
  description: "Just some demo code, <br> random light is on when holding button",
}

function loop(){
  
  if(buttonPressed){
    lights[Math.floor(Math.random()*3)] = true;
  }
  if(buttonReleased){
    lights[0]= false;
    lights[1]= false;
    lights[2]= false;
  }
}