var x = 1
function loop(){
if (x !== 0) {
  x = x+1
  call(loop);
};};
call(loop);
console.log(x);
