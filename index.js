var button=document.getElementsByClassName("drum").length;

function play(key){
    switch (key) {
        case "a":
            var snare= new Audio("src/Snare-Drum-Hit-Level-1a-www.fesliyanstudios.com.mp3");
            snare.play();
            break;
    
        case "s":
            var bass = new Audio('src/Bass-Drum-Hit-Level-3a-www.fesliyanstudios.com.mp3');
            bass.play();
            break;

        case "d":
            var tom = new Audio('src/Medium-Tom-Drum-Hit-Level-5B-www.fesliyanstudios.com.mp3');
            tom.play();
            break;

        case "f":
            var stick = new Audio('src/Drum-Sticks-Hit-A-www.fesliyanstudios.com.mp3');
            stick.play();
            break;

        case "g":
            var crash = new Audio('src/Crash-Cymbal-Hit-C-www.fesliyanstudios.com.mp3');
            crash.play();
            break;
        case "h":
            var splash = new Audio('src/Splash-Cymbal-Hit-B-www.fesliyanstudios.com.mp3');
            splash.play();
            break;
        case "j":
            var hihat = new Audio('src/Hi-Hat-Closed-Hit-D1-www.fesliyanstudios.com.mp3');
            hihat.play();
            break;
    }
}
for(var i=0;i<button;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
        let btn = this.innerHTML;
        play(btn);
        buttonAnimation(btn);
    });
}

document.addEventListener("keypress", function(e){
    play(e.key);
    buttonAnimation(e.key);
});

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}