var menuButton = document.querySelector('#menu-bt');
var imgButton = document.querySelector("#img-bt");
var navLinks = document.querySelectorAll('nav a');
var nav = document.querySelector('nav');

function closeMenu(){
    menuButton.textContent="";
    menuButton.classList.remove("closeMenu");
    menuButton.appendChild(imgButton);
    nav.style.display ="none";
}


function expendMenu(){
    if (menuButton.textContent !="X"){
        menuButton.removeChild(imgButton);
        menuButton.textContent="X";
        menuButton.className ="closeMenu";
        nav.style.display ="block";
    }else{
        closeMenu();
    }
}


menuButton.addEventListener('click', expendMenu);
for (var i=0; i<navLinks.length; i+=1){
    navLinks[i].addEventListener('click', closeMenu);
}