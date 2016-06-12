/**A FreeCodeCamp algorithm problem- Bonfire: Truncate a string
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a "..." ending.
Note that the three dots at the end add to the string length.
If the num is less than or equal to 3, then the length of the three dots is not added to the string length.*/

function truncate(str, num) {
  var strLength = str.length;
  var strFinal = str;
  if(strLength > num){
    strFinal = str.substr(0, num - 3);
    strFinal += "...";
  }
  if(strLength >= num && num <= 3)
    {
      strFinal = str.substr(0, num);
      strFinal += "...";
    }
  return strFinal;
}

truncate("A-", 1);