/*A FreeCodeCamp algorithm problem- Bonfire: Find the Longest Word in a String
Return the length of the longest word in the provided sentence.*/

function findLongestWord(str) {
  var strings = str.split(" ");
  var temp = strings[0].length;
  for(var i = 0; i < strings.length; i++)
    {
      if(strings[i].length > temp)
         temp = strings[i].length;
    }
  return temp;
}

findLongestWord("The quick brown fox jumped over the lazy dog");