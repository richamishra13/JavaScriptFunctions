//Function Declaration

// function isEven(num){
//   if(num%2 === 0){
//     console.log("Even");
//   }
//   else{
//     console.log("Odd");
//   }

// }
// console.log(isEven(45));
//............................................

//Function Expression
// const isEven = function(num){
//   return num%2 ===0;

// }
// console.log(isEven(45))

//..........................................
///Arrow Function

const isEven = (num) =>{
  return num%2 ==0;
//IF we have only one argument we can also write this func in simgle lin
// const isEven = num => num%2 == 0;
}
const evenOdd = isEven(54);
console.log(evenOdd)