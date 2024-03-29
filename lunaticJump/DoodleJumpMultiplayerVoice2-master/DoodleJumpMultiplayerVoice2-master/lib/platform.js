function Platform(x,altitude){
  this.x = x;
  this.altitude = altitude;//altitude
  this.img = loadImage("images/grass.png");
  this.onScreen = true;
  this.s = 50;
}

Platform.prototype.draw =  function(altitude){
  if(altitude - this.altitude < height/2){
  image(this.img,this.x,(altitude-this.altitude + height/2),this.s,15);
  // stroke("#FF0000");
  // strokeWeight(2);
  // rect(this.x,(altitude-this.altitude + height/2),this.s,15);
  }else{
  this.onScreen = false;
  }
};

Platform.prototype.collidesWith = function(doodler){
  var pT = this.altitude + 18; //platform altitude
  var dB = doodler.loc.y - (doodler.s/2);// doodler bottom
   // stroke("#FF0000");
   // strokeWeight(10);
   // line(this.x,this.altitude,this.x+50,this.altitude);
  if(Math.abs(pT - dB) < - doodler.vel.y && (pT < dB)){
     var pLX = this.x ; // platform left most x bound
     var pRX = this.x + this.s;//platform right most x bound
     var dLX = doodler.loc.x;//doodler left most x bound
     var dRX = doodler.loc.x + (doodler.s/2);//doodler right most x bound
     var x = doodler.loc.x;

     if((dLX >= pLX && dLX <= pRX) || (dRX >= pLX && dRX <= pRX)){
       return true;
     }
    }
  return false;
};
