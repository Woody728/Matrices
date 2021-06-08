function mult(matrix1, matrix2){
  let newMatrix = [];
  let tempArray = [];
  for(i = 0; i < matrix1.length; i++){
    newMatrix.push([])
    for(k = 0; k < matrix1.length; k++){
      for(j = 0; j < matrix2.length; j++){
        tempArray.push(matrix1[i][j]*matrix2[j][k])
      }
      let newElement = tempArray.reduce(
        function(currentValue, accumulator){
          accumulator + currentValue
          return accumulator + currentValue
        }
      )
      newMatrix[i].push(newElement);
      tempArray = [];
      }
  }
  return newMatrix;
}

//The following is an example of the function taking two matrices as arguments.

myMatrix1 = [[1,2,4],[3,2,8],[4,7,3]];
myMatrix2 = [[3,5,2],[6,8,3],[1,1,8]];
console.log(mult(myMatrix1,myMatrix2));
