let operator;
let num = 0;
let numArray = [];
let operatorSelected = false;
let currentOperator;
let displayedValue;
let previousValue;
let currentValue;
let computed = false;
let firstNum = "";
let secondNum = "";
let value;
let firstNumTurn = true;
let secondNumTurn = false;
let decimalAllowed = true;
const operators = document.querySelectorAll(".operator");
let content = document.getElementById("content");
const numbers = document.querySelectorAll(".num");
const equalsBtn = document.getElementById("equals");
const clearBtn = document.getElementById("ac");
let previousDigit = "";

function clear() {
  content.textContent = 0;
  result = 0;
  firstNum = "";
  secondNum = "";
  firstNumTurn = true;
  secondNumTurn = false;
  num = 0;
}

clearBtn.addEventListener("click", clear);

equalsBtn.addEventListener("click", () => {
  if (firstNum != "" && secondNum !== "") {
    result = operate(operator, firstNum, secondNum);
    console.log("the result is " + result);
    if ((result.toString()).length > 10) {
      content.textContent = result.toFixed(6);
    } else {
      content.textContent = result;
    }
    
    // firstNumTurn = true
    // secondNumTurn = false
    // firstNum = ''
    // secondNum = ''
    firstNum = result;
    firstNumTurn = false;
    secondNumTurn = true;
    secondNum = "";
  }
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    // content.textContent = '0'
    let digit = e.target.innerText;
    console.log(digit);
    if (digit === "." && previousDigit === ".") {
      alert("Cannot have a decimal point after another.");
    } else {
      if (firstNumTurn) {
        if (content.textContent === "0") {
          content.textContent = digit;
        } else {
          content.textContent += digit;
        }
        console.log(digit);
        value = appendNumber(digit);
        console.log("currently on first num");
        console.log(value);
        firstNum = Number(value);
        console.log(firstNum);
      }
      if (secondNumTurn) {
        // let digit = e.target.innerText;
        // console.log(digit)
        if (
          content.textContent === "0" ||
          content.textContent === "+" ||
          content.textContent === "-" ||
          content.textContent === "*" ||
          content.textContent === "/"
        ) {
          content.textContent = digit;
        } else {
          content.textContent += digit;
        }
        value = "";
        console.log(value);

        value = appendNumber(digit);

        console.log("currently on second num");
        console.log(value);
        secondNum = Number(value);
        console.log(secondNum);
      }
    }
    // if (firstNumTurn) {

    //   if (content.textContent === "0") {
    //     content.textContent = digit;
    //   } else {
    //     content.textContent += digit;
    //   }
    //   console.log(digit)
    //   value = appendNumber(digit);
    //   console.log("currently on first num");
    //   console.log(value);
    //   firstNum = Number(value);
    //   console.log(firstNum);
    // }
    // if (secondNumTurn) {
    //   // let digit = e.target.innerText;
    //   // console.log(digit)
    //   if (
    //     content.textContent === "0" ||
    //     content.textContent === "+" ||
    //     content.textContent === "-" ||
    //     content.textContent === "*" ||
    //     content.textContent === "/"
    //   ) {
    //     content.textContent = digit;
    //   } else {
    //     content.textContent += digit;
    //   }
    //   value = "";
    //   console.log(value);

    //   value = appendNumber(digit);

    //   console.log("currently on second num");
    //   console.log(value);
    //   secondNum = Number(value);
    //   console.log(secondNum);
    // }

    previousDigit = digit;
  });
});

operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    if (firstNum !== "") {
      let sign = e.target.id;

      switch (sign) {
        case "add":
          sign = "+";
          break;
        case "multiply":
          sign = "*";
          break;
        case "substract":
          sign = "-";
          break;
        case "divide":
          sign = "/";
          break;
        case "equals":
          sign = "=";
          break;
        case "percent":
          sign = "%";
          break;
        default:
          break;
      }
      // console.log(sign)
      content.textContent = sign;
      operator = getOperator(sign);
      console.log(operator);
    }
  });
});

function getOperator(op) {
  firstNumTurn = false;
  secondNumTurn = true;
  return op;
}
let counter = 0;

//function that appends number
function appendNumber(d) {
  counter = 0;
  if (secondNumTurn && secondNum === "") {
    num = 0;
    counter += 1;
  }
  // counter = 0
  if (num === 0) {
    num = d;
  } else {
    console.log(d);
    num += d;
    console.log(num);
  }
  // num = Number(num);
  console.log("current num is: " + num);

  // if (firstNum === '') {
  //   firstNum = num
  //   return firstNum
  // }
  // else if (secondNum === '' && firstNum !== '') {
  //   secondNum = num
  //   return secondNum
  // }
  return num;
}

// if (firstNum === '') {
//   firstNum = appendNumber()
//   console.log(firstNum)
// }

function operate(op, n1, n2) {
  let result = 0;
  n1 = Number(n1);
  n2 = Number(n2);

  switch (op) {
    case "+":
      result = addition(n1, n2);
      break;
    case "-":
      result = subtraction(n1, n2);
      break;
    case "*":
      result = multiplication(n1, n2);
      break;
    case "/":
      result = division(n1, n2);
      break;
    case "%":
      result = percent(n1, n2);
      break;
    default:
      break;
  }
  return result;
}

function addition(x, y) {
  return x + y;
}

function subtraction(x, y) {
  return x - y;
}

function multiplication(x, y) {
  return x * y;
}

function division(x, y) {
  if (y === 0) {
    alert("Cannot divide by 0!");
    clear();
    current.innerText = "0";
    return;
  }
  return x / y;
}

function percent(x, y) {
  return x * (y / 100);
}

// equalsBtn.addEventListener('click', ()=> {
//   compute()
// })

// numbers.forEach(num => {
//   num.addEventListener('click', ()=> {
//     appendNumber(num.innerText)
//     showOnDisplay()
//   })
// })

// function appendNumber(number) {
//   if (computed) {
//     currentValue = ''
//     displayedValue = ''
//     content.innerText = ''
//     computed = false
//   }
//   displayedValue += number
//   if (number !== ".") {
//     currentValue += number
//   }
// }

// function showOnDisplay() {
//   content.innerText = displayedValue
//   currentValue += content.innerText
// }

// function compute() {
//   let result
//   if (currentOperator !== '') {
//     result = operate(currentOperator, previousValue, currentValue)
//     if (result || result === 0) {
//       if (result.toString().length > 8) {
//         content.innerText = result.toFixed(6)
//       } else {
//         content.innerText = result
//         currentValue = result
//       }
//       previousValue = ''
//       computed = true
//       currentOperator = ''
//     }
//   }
//   return result
//   operate()
// }

// operators.forEach(operator => {
//   operator.addEventListener('click', ()=> {
//     getOperator(operator.innerText)
//   })
// })

// function getOperator(operator) {
//   if (currentOperator && !content.innerText) { // when operator is selected before a number is
//     return
//   }
//   console.log(operator)
//   return operator

//   // else {
//   //   console.log(operator)
//   //   operator = content.innerText

//   // }

// }

// FUNCTIONS
// console.log(numbers)
// numbers.every((number) => {
//   number.addEventListener('click', (e) => {
//     if (operatorSelected) {
//       return false
//     }
//     let digit = e.target.id
//     if (content.textContent === "0") {
//       content.textContent = digit;
//     } else {
//       content.textContent += digit;
//     }
//     num = Number(content.textContent)
//     console.log(num)
//     return true
//   })
// })
// numbers.forEach((number) => {
//   number.addEventListener("click", (e) => {
//     let digit = e.target.id;
//     // console.log(digit);
//     if (content.textContent === "0") {
//       content.textContent = digit;
//     } else {
//       content.textContent += digit;
//     }
//     numArray.push(digit)
//     num = Number(content.textContent);

//   });
// });
// console.log(numArray)
// console.log(num);

// operators.forEach((sign) => {
//   sign.addEventListener('click', (e) => {
//     operator = e.target.id
//     console.log(operator)
//     operatorSelected = true
//   }) })

// function addition(a, b) {
//   result = a + b;
//   console.log(result);
// }

// // addition(5, 4)

// function subtraction(a, b) {
//   result = a - b;
//   console.log(result);
// }

// function multiplication(a, b) {
//   result = a * b;
//   console.log(result);
// }

// function division(a, b) {
//   result = a / b;
//   console.log(result);
// }

// // addition(5, 4);
// // subtraction(5, 4)
// // multiplication(5, 4)
// // division(5, 4)

// function getNum() {
//   if (operatorSelected) {
//     operatorSelected = false;
//     console.log("final num is: " + num);
//     return num;
//   }
//   content.textContent = "0";
//   num = 0;
//   numbers.forEach((number) => {
//     number.addEventListener("click", (e) => {
//       // if (operatorSelected) {
//       //   operatorSelected = false
//       //   console.log("final num is: " + num);
//       //   return num;
//       // } else {
//       {
//         let digit = e.target.id;
//         if (content.textContent === "0") {
//           content.textContent = digit;
//         } else {
//           content.textContent += digit;
//         }
//         num = Number(content.textContent);
//         console.log("current num is: " + num);
//       }
//     });
//   });
// }

// getNum();
// getOperator();
// if (num !== 0) {
//   getNum()
// }

// function getOperator() {
//   operators.forEach((sign) => {
//     sign.addEventListener("click", (e) => {
//       operator = e.target.id;
//       operatorSelected = true;
//       console.log(operator);
//       return operator;
//     });
//   });
// }

// function operate() {
//   let n1 = getNum()
//   console.log(n1)

//   getOperator()
//   let n2 = getNum()

//   let op = getOperator()
//   let n2 = getNum()
//   console.log(n1, op, n2)
// if (operator === "+") {
//   addition(6, 2)
// }

// getNum()
// getOperator()

// operate()
