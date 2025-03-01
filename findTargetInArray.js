//Function Declaration
// function findTarget(array, target) {
//   for (i = 0; i < array.length; i++) {
//     if (array[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }
// const Array = [3, 4, 6, 9, 67, 40];
// const ans = findTarget(Array, 40);
// console.log(ans);
//............................................................
//Function Expression
// const findTarget = function(array, target){
//   for(i=0; i< array.length; i++){
//     if(array[i] === target){
//       return i;
//     }
//   }
//   return -1
// }
// const Array = [0,7,8,45,33,66,90];
// const ans = findTarget(Array,66)
// console.log(ans)
//....................................
//Arrow Function
const findTarget= (array, target) => {
  for(i=0; i<array.length; i++){
    if(array[i] === target){
      return i;
    }
  }
  return -1
}
console.log(findTarget([2,4,56,67,90],1))
