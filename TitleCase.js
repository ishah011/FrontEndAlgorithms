/*A FreeCodeCamp algorithm problem- Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".*/

function titleCase(str) {
  var tempStr = str.toLowerCase();//make the string all lowercase
  var tempArr = tempStr.split("");//split into char array
  tempArr[0] = tempArr[0].toUpperCase();//make the first letter upper case
  for(var i = 0; i < tempArr.length; i++)//go through all letters of the array
    {
      if(tempArr[i].localeCompare(" ") === 0)
        tempArr[i+1] = tempArr[i+1].toUpperCase();//the current character is a space, so capitalize the next letter
    }
  tempStr = tempArr.join("");//join all the array to make a string
  return tempStr;
}

titleCase("I'm a little tea pot");