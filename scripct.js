// Loader

window.addEventListener("load", () => {

    document.getElementById("loader").style.display = "none";

});

// Typing Effect

const text = "Aspiring Full Stack Developer";

let index = 0;

function typingEffect() {

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect,100);
    }
}

typingEffect();


// Theme Toggle

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("light");

});


// Back To Top

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click",()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});


// Contact Form

document.getElementById("contactForm")
.addEventListener("submit",(e)=>{

    e.preventDefault();

    alert("Message Sent Successfully!");

});