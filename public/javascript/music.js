window.addEventListener('keydown', function(el){

const audio = document.querySelector(`audio[data-key="${el.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${el.keyCode}"]`);
if(!audio)
return;
audio.currentTime=0;
audio.play();
key.classList.add('playing');


}) 

function removeTransition(el){
	if(el.propertyName !== 'transform') return;
	this.classList.remove("playing");
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend", removeTransition) );
keys.forEach(key => key.addEventListener("animationed", removeTransition) );

