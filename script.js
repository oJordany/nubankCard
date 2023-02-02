const activator = document.querySelector("div.flip-card-inner")
const frontCard = document.querySelector("div.card")
const backCard = document.querySelector("div.card-back")

frontCard.addEventListener("mouseover", e => {
    const metalicEffect = document.styleSheets[0].cssRules[8]
    metalicEffect.style.left == "-350px" ? metalicEffect.style.left = "950px" : metalicEffect.style.left = "-350px" 
})

frontCard.addEventListener("click", e => {
    activator.style.transform = "rotateY(180deg)"
})

backCard.addEventListener("click", e => {
    activator.style.transform = "rotateY(0deg)"
})


// if (activator.style.transform == "rotateY(180deg)"){
//     console.log("TIRA O EFEITO")
// }