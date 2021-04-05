/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
function greet(timeString) {
  let time = timeString.split (':'); 
  //format
  let currentTime = parseInt(time);
  //function parses a string argument and returns an integer
if (currentTime<12){
    return "Good Morning";
  } else if (currentTime>17){
    return "Good Evening";
  }
  return "Good Afternoon";
}


function displayMessage(message)  {

  document.getElementById("greeting").innerText = message;
//# > ID | . > tag  #greeting node 
}


