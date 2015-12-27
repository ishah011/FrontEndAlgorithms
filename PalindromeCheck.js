/*A FreeCodeCamp algorithm problem- "Bonfire: Check for Palindromes". Return true if the given string is a palindrome. Otherwise, return false.

You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.*/

function palindrome(str) {
  var lowStr = str.toLowerCase();//makes the string lowercase
  var array = lowStr.split(/[\s,.:()_-]+/);//splits the string into an array with the delimiters being all non-alphanumeric characters
  var tempStr = array.join("");//joins the alphanumeric characters into a temporary new string
  var newArr = tempStr.split("");//splits the string into an array of characters
  newArr.reverse();//reverse the array
  var newStr = newArr.join("");//join them into a new string
  if(newStr.localeCompare(tempStr) === 0)// checks to see if the final new string is the same as the temporary new string
    return true;//it is a palindrome
  else
    return false;//they are not the same, so it is not a palindrome
}



palindrome("A man, a plan, a canal. Panama");