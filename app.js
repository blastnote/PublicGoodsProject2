const bodyBlackout = document.querySelector('.body-blackout')
const popup = document.querySelector('.popup-window')
const getFacts = document.querySelector('.facts-button')


setInterval(() => {
    popup.classList.add('is--visible')
    bodyBlackout.classList.add('is-blacked-out')

    getFacts.addEventListener('click',() => {
        getFactsApi()
    })

    popup.querySelector('.popup-window-close').addEventListener('click', () => {
        popup.classList.remove('is--visible')
        bodyBlackout.classList.remove('is-blacked-out')
    })

    bodyBlackout.addEventListener('click', () => {
        popup.classList.remove('is--visible')
        bodyBlackout.classList.remove('is-blacked-out')
    })
},3000)

async function getFactsApi() {
    const facts = document.querySelector('.facts')
    await fetch('https://cat-fact.herokuapp.com/facts').then(response =>{
        return response.json()
    }).then((json)=>{
        facts.innerHTML = ''
        json.forEach((elem,index) => {
            var line = document.createElement("p")
            line.innerHTML = (index+1)+". "+elem.text
            facts.appendChild(line)
        })
    })
}
