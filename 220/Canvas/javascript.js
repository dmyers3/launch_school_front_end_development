$(function() {
  var canvas = document.querySelector('canvas');
  // console.log(canvas);
  var ctx = canvas.getContext('2d');
  // var colors = ['#000', '#003', '#006', '#009', '#00c', '#00f'];
    
  // function draw() {
  //   colors.forEach(function(color, i) {
  //     ctx.fillStyle = color;
  //     ctx.fillRect(i * 20, i * 20, canvas.width - i * 40, canvas.height - i * 40);
  //   });
  //   colors.unshift(colors.pop());
  // }
    
  // setInterval(draw, 200);
  
  var x = canvas.width / 3;
  var y = canvas.height / 3;
  var radius = x;
  
  ctx.beginPath();
  ctx.arc(x, y + 100, radius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.closePath();
  
  ctx.beginPath();
  ctx.strokeStyle = 'rgba(0, 102, 204, .7)';
  ctx.moveTo(x, y - 50);
  ctx.lineTo(x + 50, y);
  ctx.lineTo(x - 50, y);
  ctx.lineTo(x, y - 50);
  ctx.stroke();
  ctx.closePath();
});  