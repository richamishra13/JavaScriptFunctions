function findTarget(array, target){
  for(i=0; i<array.length; i++){

    if(array[i] === target){
      return i;
    }
    
  }
  return i-1;
}

console.log(findTarget([2,3,4,5,6,7]))