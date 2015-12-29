/*A FreeCodeCamp algorithm problem- Bonfire: Repeat a string repeat a string
Repeat a given string (first argument) n times (second argument). Return an empty string if n is a negative number.*/

function repeat(str, num) {
  var newStr = "";
  for(var i = 0; i < num; i++)
    newStr += str;
  return newStr;
}

repeat("abc", 3);