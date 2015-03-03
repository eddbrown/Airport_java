describe('Plane', function(){
  var plane;

  it('is flying when created', function(){
    plane = new Plane(); 
    expect(plane.isFlying).toBe(true);
  });

  it('can land', function(){
    plane = new Plane();
    plane.land();
    expect(plane.isFlying).toBe(false);
  });

  it('can fly', function(){
    plane = new Plane();
    plane.land();
    plane.fly();
    expect(plane.isFlying).toBe(true)
  });

});