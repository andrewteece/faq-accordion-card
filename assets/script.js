const hoverText = document.querySelectorAll('.card__body--item h2')
const rotateImg = document.querySelectorAll('.card__body--item img')
const hiddenText = document.querySelectorAll('.card__body--item div')
const card = document.querySelector('.card')

hoverText.forEach((text, index) => {
    text.addEventListener('click', () => {
        hiddenText.forEach((paragraph, i) => {
            if (i !== index) {
                paragraph.classList.remove('visible')
                rotateImg[i].classList.remove('rotated')
                hoverText[i].classList.remove('clicked')
            }
        })

        rotateImg[index].classList.toggle('rotated')
        hiddenText[index].classList.toggle('visible')
        hoverText[index].classList.toggle('clicked')
    })
})