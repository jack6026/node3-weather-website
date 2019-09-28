const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

//messageOne.textContent = 'From JavaScript'

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    
    if (search.value) {
        const location = search.value
        const url = 'http://localhost:3000/weather?address=' + location

        fetch(url).then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    messageOne.textContent =  data.error
                } else {
                    messageOne.textContent = data.location
                    messageTwo.textContent =  data.forecast
                }
            })
        })
    } else {
        messageOne.textContent =  'Please enter location'
    }
})