var Airport = function () {
  this.planes = [];
};

Airport.prototype.dock = function(plane) {
  this.planes.push(plane);
  plane.land();
};

Airport.prototype.takeOff = function(plane) {
  var index = this.planes.indexOf(plane);
  this.planes.splice(index, 1);
  plane.fly();
};

