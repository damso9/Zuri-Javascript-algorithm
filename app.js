//declare function
// create a for loop
// add new items to the array
//check if number is divisible my 2,3,5
//replace the respective values
//remove the first array item using shift
//return array

function engine(enginelimit, arr) {
  for (let i = 0; i <= enginelimit; i++) {
    arr.push(i);

    if (arr[i] % 2 == 0 && arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr.splice(i, 1, "yu-gi-oh");
    } else if (arr[i] % 2 == 0 && arr[i] % 5 == 0) {
      arr.splice(i, 1, "yu-oh");
    } else if (arr[i] % 2 == 0 && arr[i] % 3 == 0) {
      arr.splice(i, 1, "yu-gi");
    } else if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
      arr.splice(i, 1, "gi-oh");
    } else if (arr[i] % 2 == 0) {
      arr.splice(i, 1, "yu");
    } else if (arr[i] % 3 == 0) {
      arr.splice(i, 1, "gi");
    } else if (arr[i] % 5 == 0) {
      arr.splice(i, 1, "oh");
    } else {
      console.log("");
    }
  }
  arr.shift();
}
const checkYuGiOh = (limit) => {
  //number validation
  if (typeof limit == "number") {
    let myArray = [];
    engine(limit, myArray);
    return myArray;
  }
  //string validation
  else if (typeof limit == "string") {
    let fNumber = Number(limit);

    if (isNaN(fNumber)) {
      console.log("this is not a number can't be converted to one");
      return `this is not a number can't be converted to one`;
    } else {
      let myArray = [];
      engine(fNumber, myArray);
      return myArray;
    }
  } else {
    let error = "invalid data type input";
    return error;
  }
};
