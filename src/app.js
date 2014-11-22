var Vector2 = require('vector2');
var UI = require('ui');
var wind = new UI.Window();
var element = new UI.Rect({ position: new Vector2(50, 50), size: new Vector2(50, 50) });
element.borderColor('white');
element.backgroundColor('black');

wind.add(element);
wind.show();

var image = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(20, 20),
  image: "images/jibanyan3.png",
});
wind.add(image);


var yokai = function(){
  console.log('start');
  image.position(new Vector2(0, 0));
  var pos = image.position();
  pos.y = 200;
  pos.x = 200;
  image.animate('position',pos , 2000)
  .queue(function(){console.log("retry");yokai();});
};

yokai();

wind.on('click', 'select', function(event){
  console.log("point" + image.position().x + ", " + image.y);
});