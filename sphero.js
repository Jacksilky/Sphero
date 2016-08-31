var sphero = require("sphero");
  var  orb = sphero("\\\\.\\COM16"); // change port accordingly 
 
orb.connect(function() {
  // roll Sphero forward 
  orb.roll(1500, 3);
 
  // turn Sphero green 
  orb.color("green");
 
  // have Sphero tell you when it detect collisions 
  orb.detectCollisions();
 
  // when Sphero detects a collision, turn red for a second, then back to green 
  orb.on("collision", function(data) {
    console.log("collision detected");
    console.log("  data:", data);
 
    orb.color("red");
 
    setTimeout(function() {
      orb.color("green");
    }, 1000);
  });
});