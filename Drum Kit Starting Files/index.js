// Getting the number of drum buttons
var numberofDrumButtons = document.querySelectorAll('.drum').length;

// Detecting Button Press
for(var i = 0; i<numberofDrumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
       var buttonInnerHTML = this.innerHTML;

       makeSound(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    });
}

// Detecting Keyboard Press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

// Function to play different sounds based on key/button
function makeSound(key){
        switch (key) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
                break;
            
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
                break;
            
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
                break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
                break;
            case "j":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
                break; 
            
            case "k":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
                break;
            case "l":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
                break;
            default:
                console.log(key);
        }
}

// Adding animation to buttons when pressed
function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    
    // Add pressed class for animation
    activeButton.classList.add("pressed");
    
    // Remove pressed class after 100ms
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
