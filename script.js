const activator = document.querySelector("div.flip-card-inner")
const frontCard = document.querySelector("div.card")
const backCard = document.querySelector("div.card-back")

frontCard.addEventListener("mouseover", e => {
    document.styleSheets[0].cssRules[7].style.content = null
})

frontCard.addEventListener("click", e => {
    activator.style.transform = "rotateY(180deg)"
})

backCard.addEventListener("click", e => {
    activator.style.transform = "rotateY(360deg)"
})