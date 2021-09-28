console.log('Hello User!') 
console.log('Try to guess the mystery number.')
console.log('Use "submit(x)" to submit a number.')

const mysteryNumber = Math.round(Math.random() * 100)


const submit = (x) => {
    if (x < mysteryNumber) {
        console.log('Too small')
        document.body.innerHTML = '<h1>Too small<h1>'
        document.body.style.backgroundColor = '#ff0000'
    } 
    if (x > mysteryNumber) {
        console.log('Too big')
        document.body.innerHTML = '<h1>Too big<h1>'
        document.body.style.backgroundColor = '#0008ff'
    }
    if (x == mysteryNumber) {
        console.log('Hurray')
        document.body.innerHTML = '<h1>Hurray<h1>'
        document.body.style.backgroundColor = '#6eff00'
    }
}

const cheat = () => {
    console.log(`The mystery number is ${mysteryNumber}`)
}