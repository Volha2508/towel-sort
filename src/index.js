
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  return matrix.flatMap(
    (currentValue, index) => index % 2 === 0 ? currentValue 
                                             : currentValue.reverse() 
);
  
  //return [];
}
