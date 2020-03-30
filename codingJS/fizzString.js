function fizzString(str){
  let f = "Fizz";
  let b = "Buzz";
  return (str.charAt(0) === "f" && str.charAt(str.length-1) === "b") ? f+b : (str.charAt(0) === "f") ? f : (str.charAt(str.length-1) === "b") ? b : str;
}