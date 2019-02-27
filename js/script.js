var menuButton = document.querySelector('#menu-bt');
var imgButton = document.querySelector("#img-bt");

var nav = document.querySelector('nav');

function expendMenu(){
    if (menuButton.textContent !="X"){
        menuButton.removeChild(imgButton);
        menuButton.textContent="X";
        menuButton.className ="closeMenu";
        nav.style.display ="block";
    }else{
        menuButton.textContent="";
        menuButton.classList.remove("closeMenu");
        menuButton.appendChild(imgButton);
        nav.style.display ="none";
    }
}


menuButton.addEventListener('click', expendMenu);
