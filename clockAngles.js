function clock_angles(hour,minute){
    
  var degree = ((hour *30) + (minute * .5)) - (minute * 6)
  degree = Math.abs(degree);
  return degree;
}
clock_angles(3,30); //90

//returns degree of angle formed by two hands at any given time
//note circle is 360 degrees

