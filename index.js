// alert("Working")
let drum=document.querySelectorAll('.drum')
for(let i=0;i<drum.length;i++)


// button press 
drum[i].addEventListener('click',handleClicked)
function handleClicked(){

    var buttonInner=this.innerHTML
    switchAudio(buttonInner);
    buttonAnimation(buttonInner);

}

// keyboard press 
document.addEventListener('keypress',keyPress)

function keyPress(event){

    switchAudio(event.key)
    buttonAnimation(event.key)
}



function switchAudio(elem){
    
    switch (elem) {
        case 'a':
            var audio1=new Audio('/sounds/tom-1.mp3')
            audio1.play()
            break;
        case 'w':
            var audio2=new Audio('/sounds/tom-2.mp3')
            audio2.play()
            break;
        case 's':
            var audio3=new Audio('sounds/tom-3.mp3')
            audio3.play()
            break;
        case 'd':
            var audio4=new Audio('sounds/tom-4.mp3')
            audio4.play()
            break;
        case 'k':
            var audio5=new Audio('sounds/kick-bass.mp3')
            audio5.play()
            break;
        case 'j':
            var audio6=new Audio('sounds/crash.mp3')
            audio6.play()
            break;
        case 'l':
            var audio7=new Audio('sounds/snare.mp3')
            audio7.play()
            break;

    
        default:
            console.log('button did not exists')
            break;
    }





// this.style.color="black"

    // var audio=new Audio('sounds/tom-1.mp3')
    // audio.play();
}


function buttonAnimation(currentkay){

    var activeButton = document.querySelector("."+currentkay);
    activeButton.classList.add('pressed')

    setTimeout(() => {
       activeButton.classList.remove('pressed');
    }, 100);


}