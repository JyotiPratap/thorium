//Module 1
let url = 'https://www.google.com'

function printMyMessage(message) {
    console.log(message)    
}   

function welcome() {
    console.log('Welcome to my application.')
}

module.exports.url = url
module.exports.printMessage = printMyMessage
module.exports.printWelcomeMessage = welcome

