const accordion = document.querySelectorAll('section')
console.log(accordion)
for(let i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click',() => {
        accordion[i].classList.toggle('active')
    })
}