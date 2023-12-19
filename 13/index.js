let links = document.querySelectorAll('.menu a')
let tabs = document.querySelectorAll('.tabs .tab')

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', (e) => {
        e.preventDefault()

        for (let j = 0; j < links.length; j++) {
            if (links[j].classList.contains('active')) {
                links[j].classList.remove('active')
                tabs[j].classList.remove('active')
            }

        }

        tabs[i].classList.add('active')
        links[i].classList.add('active')
    })
}