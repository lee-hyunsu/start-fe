const input = document.querySelector('#url')
const btn = document.querySelector('#btn')
const log = document.querySelector('#log')

function fetchUrl() {
    const inputValue = document.querySelector('#url').value
    fetch(inputValue)
        .then(resData)
        .catch(err => (log.value = err.message))
}

const resData = async res => {
    log.value = await res.text()
}

function enterPress(e) {
    if (e.key === 'Enter') {
        e.preventDefault()
        btn.click()
    }
}

function init() {
    input.addEventListener('keypress', enterPress)
    btn.addEventListener('click', fetchUrl)
}

init()