//Module 3

function trim() {
    let name = '  Sabiha Khan    '
    console.log('Trimmed name is: ',name.trim())
}

function changetoLowerCase() {
    let name = 'SaBIhA KHaN'
    console.log('Name in lowercase is: ',name.toLowerCase())
}  

function changeToUpperCase() {
    let name = 'sabiha khan'
    console.log('Name in uppercase is: ',name.toUpperCase())
}

module.exports.trim = trim
module.exports.changetoLowerCase = changetoLowerCase
module.exports.changeToUpperCase = changeToUpperCase