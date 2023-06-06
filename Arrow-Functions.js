//Change This code
// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
//   }

//One Liner
const double2 = arr => arr.map((val) => val * 2)

//Replace all functions
  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  const squareAndEvens = (numbers) => {
    let squares = numbers.map((num) => {
        return num ** 2;
    });
    let evens = squares.filter((square) => {
        return square % 2 === 0;
    });
    return evens;
  }