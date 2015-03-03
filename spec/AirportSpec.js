describe('Airport', function(){
  var heathrow;
  var plane;

  beforeEach(function() {
    heathrow = new Airport();
    plane = jasmine.createSpyObj('plane',['land', 'fly']);
  })

  it('can dock a plane', function(){
    heathrow.dock(plane);
    expect(heathrow.planes).toEqual([plane]);
  });

  it('can land a plane once docked', function(){
    heathrow.dock(plane);
    expect(plane.land).toHaveBeenCalled();
  });

  it('can make a plane take off', function(){
    heathrow.dock(plane);
    heathrow.takeOff(plane);
    expect(heathrow.planes).toEqual([])
  });

  it('makes the plane fly if it takes it off', function() {
    heathrow.dock(plane);
    heathrow.takeOff(plane);
    expect(plane.fly).toHaveBeenCalled();
  });

});