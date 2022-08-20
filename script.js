// 1. basic math operators

function add(a,b) {
   return a + b;
}

function subtract(a,b) {
   return a - b;
}

function multiply(a,b) {
   return a * b;
}

function divide(a,b) {
   return a/b ;
}

// 2. Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.



function operate(a,b,operator) {
   switch(operator) {
      case "+":
         return add(a,b);
      case "-":
         return subtract(a,b);
      case "*":
         return multiply(a,b);
      case "/":
         return divide(a,b);
   }
}

// 3. 