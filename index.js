/*let a;
let b = 1 + (a = 2);

console.log(b);*/

function timeGreeting() {
    var time = new Date().getHours();
    var greeting;
    if (time < 19) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
   return greeting
  }
console.log(timeGreeting());