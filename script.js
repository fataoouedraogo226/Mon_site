const inscrip= document.querySelector('#Inscription');
inscrip.addEventListener('click', () =>{
    const form = document.querySelector('#form-inscription');
    const form2 = document.querySelector('#form-connexion');
    form.classList.toggle("aff-inscription");
    form2.classList.remove("aff-inscription")
})

// Lorsque qu'on appuis sur 
const inscrip2= document.querySelector('#form-inscription2');
inscrip2.addEventListener('click',() =>{
    const form = document.querySelector('#form-inscription');
    const form2 = document.querySelector('#form-connexion');
    form.classList.toggle("aff-inscription");
    form2.classList.remove("aff-inscription")
})



const connexion= document.querySelector('#Connexion');
connexion.addEventListener('click', () =>{
    const form = document.querySelector('#form-connexion');
    const form2 = document.querySelector('#form-inscription');
    form.classList.toggle("aff-inscription");
    form2.classList.remove("aff-inscription")
})

const connexion2= document.querySelector('#form-connexion2');
connexion2.addEventListener('click', () =>{
    const form = document.querySelector('#form-connexion');
    const form2 = document.querySelector('#form-inscription');
    form.classList.toggle("aff-inscription");
    form2.classList.remove("aff-inscription")
})

// evenements sur la souris
const mousemove=document.querySelector(".mousemove");
window.addEventListener("mousemove", (e)=>{
    mousemove.style.left=e.pageX+"px";
    mousemove.style.top=e.pageY+"px";
})

//  Jouer le son
// ----------------------------------
const jouer=()=>{
    const audio=new Audio();
    audio.src ="./son.mp4"
    audio.play();
}
const music=document.querySelector(".jouer");
music.addEventListener('click',()=>{
    jouer();
})
