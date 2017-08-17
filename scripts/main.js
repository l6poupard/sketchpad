$(document).ready(function(){

var x = 30;
var y = x;


  makeGrid(x, y);


  $('#clear').click(function(){
    $('.box').removeClass('draw');
    x = prompt('Please enter a new grid width. We\'ll add the same number of rows for you automagically! Hint: We started you with 30 on the first board.');
    y = x;

    $('.row').remove();
    makeGrid(x,y);

  })



  $('.box').mouseenter(function(){
    $(this).addClass('draw');
  });


});


//FUNCTION START HERE

function makeGrid(rowInput, columnInput){
  for (var i = 0; i < rowInput; i++){
    $('#container').append('<div class="row"></div>');
    $('.row').height('x + 1')
  }

  for (var j = 0; j < columnInput; j++){
    $('.row').append('<div class="box"></div>');
    }

    $('#container').width(columnInput*15);
    $('#container').height(rowInput*15);
  }


/*var R = 7;
var G = 234;
var B = 52;

function generateRGB(){
  var colorR = Math.floor(Math.random() * 256);
  var colorG = Math.floor(Math.random() * 256);
  var colorB = Math.floor(Math.random() * 256);
  colorArray.push(colorR);
  colorArray.push(colorB);
  colorArray.push(colorG);

  R = colorR;
  G = colorG;
  B = colorB;

}


$('.box').mouseenter(function(){
  generateRGB();
    var RGB ='('+R+','+G+','+B+')';
  $(this).background-color('RGB');
})*/
