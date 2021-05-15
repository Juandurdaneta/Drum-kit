for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  //Click event 
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


  });
}

//Keyboard pressed

document.addEventListener("keydown", function(event){
  var keyPlayed = event.key;
  playSound(keyPlayed);
  buttonAnimation(keyPlayed);
});

//Funcion to play sound

function playSound(a){
  switch (a) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default: console.log(a);
      break;
  }
}




//Random beat generator

document.querySelector("#random").addEventListener("click", function(){
    this.classList.add("pressed");
    
    var numberOfBeats = 20;
      var randomPlayer = setInterval(() => {
          var randomNote = Math.floor(Math.random() * document.querySelectorAll(".drum").length + 1);
          var selectedNote = document.querySelectorAll("button")[randomNote];

        playSound(selectedNote.innerHTML);
        buttonAnimation(selectedNote.innerHTML);

        numberOfBeats--;

        if(numberOfBeats == 0){
          clearInterval(randomPlayer);
          this.classList.remove("pressed");
        }

      }, 120);

});

//Adding animation to our buttons

function buttonAnimation(currentKey){
  var keyPressed = document.querySelector("."+currentKey);
   
  keyPressed.classList.add("pressed");

  setTimeout(function(){
    keyPressed.classList.remove("pressed");
  }, 100); 
}