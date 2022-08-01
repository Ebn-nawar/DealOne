// navbar
let mainNav = document.querySelector(".nav-main"),
    navBtn = document.querySelector(".nav-btn"),
    navList = document.querySelector(".li-nav"),
    navUl = document.querySelector(".ul-nav"),
    navF = document.getElementsByClassName("nav-response")[0],
    navF1 = document.getElementsByClassName("nav-response")[1],
    navF2 = document.getElementsByClassName("nav-response")[2]

function myFunction(x) {
    if (x.matches) { 
        mainNav.classList.remove("uk-hidden")
        mainNav.classList.add("uk-navbar-right")
        navUl.classList.add("uk-navbar-nav")
        navF.classList.remove("nav-response")
        navF1.classList.remove("nav-response")
        navF2.classList.remove("nav-response")
    } else {
        mainNav.classList.add("uk-hidden")
        navF.classList.add("nav-response")
        navF1.classList.add("nav-response")
        navF2.classList.add("nav-response")
    }
}

var x = window.matchMedia("(min-width: 960px)")
myFunction(x) 
x.addListener(myFunction)

navBtn.onclick = function() {
    if (mainNav.classList.contains("uk-hidden")) {
        mainNav.classList.remove("uk-hidden")
        mainNav.classList.remove("uk-navbar-right")
        navUl.classList.remove("uk-navbar-nav")
    }else{
        navBtn.classList.add("uk-width-1-2")
        mainNav.classList.add("uk-hidden")
    }
}

// filler

let card = document.getElementsByClassName("card__search"),
    sub = document.querySelector(".filter__sub"),
    select = document.getElementById("sOne"),
    selectTwo = document.getElementById("sTwo"),
    msg = document.querySelector(".msg")
    

sub.onclick = function(e){
    e.preventDefault()
    for (let i = 0; i < card.length; i++) {
        if (card[i].attributes[1].value === select.value & card[i].attributes[2].value === selectTwo.value) {
            card[i].style.display = "block"
        }else{
            card[i].style.display = "none"
        }

        if (select.value === "Location" || selectTwo.value === "sort by" ) {
            msg.classList.remove("uk-hidden")
        }else{
            msg.classList.add("uk-hidden")
        }
    }
}

// fixed button

let fixBtn = document.getElementById("fixBtn")

    window.onscroll = function(){
        if (scrollY <= 300) {
            fixBtn.classList.add("uk-hidden")
        }else{
            fixBtn.classList.remove("uk-hidden")
        }
    }
