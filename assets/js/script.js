// TODO: Declare any global variables we need
let numberOfHeads = 0
let numberOfTails = 0
let percentageHeads = 0
let percentageTails = 0
let totalFlips = numberOfHeads + numberOfTails
let images = [
    {
        imagePath: 'assets/images/penny-heads.jpg',
        message: 'You flipped Heads!',
        side: 'heads'
    },
    {
        imagePath: 'assets/images/penny-tails.jpg',
        message: 'You flipped Tails!',
        side: 'tails'
    }
]

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flip').addEventListener('click', function(){
        let randomImage = images[Math.floor(Math.random() * images.length)]

        document.getElementById('penny').setAttribute('src', randomImage.imagePath)

        document.querySelector('.message-container').textContent = randomImage.message

        if (randomImage.side === 'heads'){
           numberOfHeads++
           document.getElementById('heads').textContent = numberOfHeads
        } else {
            numberOfTails++  
            document.getElementById('tails').textContent = numberOfTails
        }

        totalFlips++

        percentageHeads = Math.round((numberOfHeads / totalFlips) * 100) + '%'
        percentageTails = Math.round((numberOfTails / totalFlips) * 100) + '%'

        document.getElementById('heads-percent').textContent = percentageHeads
        document.getElementById('tails-percent').textContent = percentageTails
    })

    document.getElementById('clear').addEventListener('click', function(){
        numberOfHeads = 0
        document.getElementById('heads').textContent = numberOfHeads
        document.getElementById('heads-percent').textContent = numberOfHeads
        numberOfTails = 0
        document.getElementById('tails').textContent = numberOfTails
        document.getElementById('tails-percent').textContent = numberOfTails
        console.log('its clear')
    })

})