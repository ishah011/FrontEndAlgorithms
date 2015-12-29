/*A FreeCodeCamp algorithm problem- Bonfire: Confirm the Ending
Check if a string (first argument) ends with the given target string (second argument).*/

function end(str, target) {
  var subLength = target.length;
  var ending = str.substr(-subLength);
  if(ending === target)
    return true;
  else
    return false;
}

end("Bastian", "n");