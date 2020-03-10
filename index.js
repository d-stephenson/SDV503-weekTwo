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


/*function age(i) {
    if (i < 16) {
        return 'Sorry, you can\'t drive!!!';
    }   else if (i == 16) {
        return 'Congrats! Your time has come, get behind the wheel!';
    }   else {
        return 'Sorry, your age means you\'ve probably been driving for a while!!';
    }
}

var i = 7

console.log(age(i))*/

/*let x = 10;
let y = 5;

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x % y);
console.log(x ** y);*/

/*let x = 10;

console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);*/

/*const x = 10;

console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);
console.log(++x);
console.log(x);*/

/*let x = 10;

console.log(x);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);
console.log(x++);
console.log(x);*/

/*let x = 10;

console.log(x);
console.log(--x);
console.log(x);
console.log(--x);
console.log(x);
console.log(--x);
console.log(x);*/

/*let x = 10;

console.log(x);
console.log(x--);
console.log(x);
console.log(x--);
console.log(x);
console.log(x--);
console.log(x);*/

/*let x = 10;
let y = x;
x = 20;

console.log("Pre - Increment");

y = ++x;
console.log(x);
console.log(y);

console.log("Post - Increment");

y = x++;
console.log(x);
console.log(y);

console.log("Pre - Increment");

y = --x;
console.log(x);
console.log(y);

console.log("Post - Increment");

y = x--;
console.log(x);
console.log(y);*/

/*console.log("Pre-Increment");

let x = 1;
console.log(x);
console.log(10 * ++x);
console.log(x);
// Explain what will line 141 console log and why?

Answer: It will console.log '2' because only the post-increment (++) affects the value of 'x', the '10 x' is not a value but a calculation within the console.log and does not affect the value of x;

console.log("Post-Increment")

let y = 1;
console.log(y);
console.log(10 * y++);
console.log(y);*/

/*for(let i = 0; i<=10; ++i) {
    console.log(i)
}*/

/*let a = "Hello, ";
let b = "World!";
console.log(a + b);

let c = "I am ";
let d = "a String";
let e = c + d;
console.log(e);

let f = "My name is " + "String101";
console.log(f);*/

/*const firstWord = "Hello"
const secondWord = "World"

console.log(firstWord + " " + secondWord)
console.log(`${firstWord} ${secondWord}`);*/

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(1 || 1);
console.log(1 || 0);
console.log(0 || 1);
console.log(0 || 0);

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(1 && 1);
console.log(1 && 0);
console.log(0 && 1);
console.log(0 && 0);

console.log(1 && 1);
console.log(1 && 0);
console.log(0 && 1);
console.log(0 && 0);

console.log(1 || false);

console.log(true || 0);
console.log(1 || false);
console.log(true || 1);
console.log(false || 1);
console.log(false || 0);
console.log(0 || 0);

console.log(10 == 5);
console.log(10 != 5);
console.log(10 < 5);
console.log(10 > 5);
console.log(10 <= 5);
console.log(10 >= 5);

console.log(10 == "5");
console.log(10 == "10");
console.log(10 != "5");
console.log(10 != "10");
console.log(10 < "5");
console.log(10 < "10");
console.log(10 > "5");
console.log(10 > "10");
console.log(10 <= "5");
console.log(10 <= "10");
console.log(10 >= "5");
console.log(10 >= "10");

console.log(true == 1);
console.log(true == "1");
console.log(true == 0);
console.log(false == 1);
console.log(false == 0);
console.log(false == "0");

console.log(true != 1);
console.log(true != "1");
console.log(true != 0);
console.log(false != 1);
console.log(false != 0);
console.log(false != "0");

console.log("A" == "A");
console.log("a" == "a");

console.log("Z" > "A");

console.log("Raise" > "Race");
console.log("Break" > "Brake");
console.log("Lose" < "Loose");

console.log(1 == "1");
console.log(1 == true);

console.log(0 == false);
console.log("" == false);

console.log(1 == "1");
console.log(1 === "1");

console.log(1 == true);
console.log(1 === true);

console.log(0 == false);
console.log(0 === false);

console.log(1 != "1");
console.log(1 !== "1");

console.log(1 != true);
console.log(1 !== true);

console.log(0 != false);
console.log(0 !== false);

console.log(null == 0);
console.log(null === 0);
console.log(null > 0);
console.log(null < 0);
console.log(null >= 0);

console.log(undefined == null);
console.log(undefined === null);

console.log(undefined == 0);
console.log(undefined === 0);
console.log(undefined > 0);
console.log(undefined == 0);

console.log(null + 1);
console.log(undefined > 0);
console.log(undefined + 1);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log(true || 0);
console.log(1 || false);
console.log(true || 1);
console.log(false || 1);
console.log(false|| 0);
console.log(0 || 0);

console.log(true || 1);
console.log(1 || true);
console.log(0 || false);
console.log(false || 0);
console.log(true || 0);
console.log(1 || false);
console.log(0 || true);

console.log(0 || 1 || true);
console.log(0 || true || 1);
console.log(false || 0 || 1);

console.log(1 || null);
console.log(0 || null);
console.log(true || null);
console.log(0 || "David");

console.log(null || undefined);
console.log(undefined || null);
console.log(undefined || 0);
console.log(undefined || true);
console.log(1 || undefined);

console.log(0 || null || undefined || false);

console.log("" || true);

console.log(2 || true);
console.log(true || 2);
console.log(5 || false);
console.log(false || 10);

console.log("David" || 0);
console.log("David" || false);
console.log("David" || 10);

console.log("" || 0 || 100);

console.log(-1 || true);
console.log(-1 || false);
console.log(false || -1);

let x;
true || (x = 10);
console.log(x);

let y;
false || (y = 10);
console.log(y);

console.log(true && 1);
console.log(1 && true);
console.log(0 && false);
console.log(false && 0);
console.log(true && 0);
console.log(1 && false);
console.log(0 && true);

console.log(0 && 1 && true);
console.log(true && 1 && 0);
console.log(1 && 0 && true);
console.log(0 && true && false);
console.log(false && true && 0);
console.log(true && 0 && false);

console.log(true && null);
console.log(0 && null);
console.log(null && undefined);
console.log(0 && undefined);
console.log(undefined && 0);
console.log(1 && undefined);
 
console.log(true && 1 && "David");
console.log(1 && true && "");
console.log(true && 1 && undefined && null);

console.log(!true);
console.log(!false);

console.log(!1);
console.log(!0);

console.log(!"David");
console.log(!10);

console.log(!!true);
console.log(!!false);

console.log(!!1);
console.log(!!0);

console.log(!!"David");
console.log(!!10);

console.log(true);
console.log(!true);
console.log(!!true);








