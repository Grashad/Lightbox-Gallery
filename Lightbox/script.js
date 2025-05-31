const imageElement = document.querySelectorAll(".gallery-item")
const imageDisp = document.querySelector(".lightbox")
function imgEdit(img, link) {
    img.classList.toggle("lightbox")
    if (img.classList.contains("lightbox") === true) {
        imageDisp.style.display = "flex"
        imageDisp.children["lightbox-image"].src = `${link}`
        imageDisp.children["close-btn"].addEventListener("click", (b) => {
            b.stopPropagation()
            img.classList.remove("lightbox")
            imageDisp.style.display = "none"
        })
        imageDisp.addEventListener("click", () => {
            img.classList.remove("lightbox")
            imageDisp.style.display = "none"
        })
        imageDisp.children["lightbox-image"].addEventListener("click", (stopEvent) => {
            stopEvent.stopPropagation()
        })
    }
}



imageElement.forEach(image =>
    image.addEventListener("click", (t) => {
        let img = t.target
        let link = img.src.replace(/(-thumbnail)/g, "")
        imgEdit(img, link)
    })
)
