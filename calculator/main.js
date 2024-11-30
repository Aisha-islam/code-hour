console.log("print something");

// calculator 
let num1 = 6 
let num2 = 6
let operation = "+"

let sum = (num1 , num2) =>{
    return (num1 + num2)

}
let minus = (num1, num2) => {
  return num1 - num2;
};
let div = (num1, num2) => {
  return num1 / num2;
};
let pro = (num1, num2) => {
  return num1 * num2;
};

if (operation === "+"){
    console.log(sum(num1,num2));
  
};

