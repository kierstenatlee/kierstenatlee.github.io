// alert("hello World")
// sayHello(myName)
//
// var myName ="Kiersten"
// var perfectSquare= 9;
// var isSunday = true;
//
// function sayHello(myName){
//   alert("Hello "+myName)
// }


var animals = document.getElementsByClassName("animal")
var bestAnimal = document.getElementById("sheep")

function getBestAnimal(){
  //get the user's favorite animal
  // store the favorite animal as a variable
  var fave = prompt("What is your favorite animal?")
  console.log(fave)
  // change the best animal to match the user's input
  var bestAnimal = document.getElementById("sheep")
  bestAnimal.textContent= fave;

  //if the value of fav is empty
  if(fave ==''){
    //do something
    console.log("fave is not set")
    bestAnimal.textContent = "Lion"
    //if user does enter animal
  } else {
    // do something else
    console.log("fave is set")
    bestAnimal.textContent = fave;
  }
}
getBestAnimal()
