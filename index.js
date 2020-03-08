/*let a;
let b = 1 + (a = 2);

console.log(b);*/

/*function timeGreeting() {
    var time = new Date().getHours();
    var greeting;
    if (time < 19) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }
   return greeting
  }

console.log(timeGreeting());*/

/*function testNum(a) {
    if (a > 10 && a < 100) {
      return "positive";
    } else {
      return "NOT positive";
    }
  }
  
  console.log(testNum(29));*/

  /*let ten = 10;

  console.log (ten * ten)*/


function age(i) {
    if (i < 16) {
        return 'Sorry, you can\'t drive!!!';
    }   else if (i == 16) {
        return 'Congrats! Your time has come, get behind the wheel!';
    }   else {
        return 'Sorry, your age means you\'ve probably been driving for a while!!';
    }
}

i = 7

console.log(age(i))

