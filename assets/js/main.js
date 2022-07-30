// filler

let card = document.getElementsByClassName("card__search"),
    sub = document.querySelector(".filter__sub"),
    select = document.getElementById("sOne"),
    selectTwo = document.getElementById("sTwo"),
    msg = document.querySelector(".msg")
    

sub.onclick  = function(e){
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

// comments