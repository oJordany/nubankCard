const activator = document.querySelector("div.flip-card-inner")
const frontCard = document.querySelector("div.card")

frontCard.addEventListener("click", e => {
    activator.style.transform = "rotateY(180deg)"
})
const backCard = document.querySelector("div.card-back")
backCard.addEventListener("click", e => {
    activator.style.transform = "rotateY(360deg)"
})