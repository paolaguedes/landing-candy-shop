
const arrowL = document.getElementsByClassName("fa-chevron-left")[0]
const arrowR = document.getElementsByClassName("fa-chevron-right")[0]
let card = document.querySelectorAll(".card1")
let card2 = document.querySelectorAll(".card2")

function arrows () {
  for(let i=0; i< card.length; i++){
    card[i].classList.toggle("card-off")
    card2[i].classList.toggle("card-off")
  }
}

arrowR.addEventListener('click', arrows )
arrowL.addEventListener('click', arrows )


