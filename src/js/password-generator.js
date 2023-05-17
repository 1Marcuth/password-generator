const lowerLetters = "abcdefghijklmnopqrstuvwxyz"
const upperLeters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const digits = "0123456789"
const specialChars = "@#$%&!*?-_=+-./\\"

function randomChoice(iterable) {
    const randomIndex = Math.floor(Math.random() * iterable.length)
    const choice = iterable[randomIndex]
    return choice
}

function randomChoices(iterable, length) {
    let choices = []
    
    for (let i = 0; i < length; i++) {
        const choice = randomChoice(iterable)
        choices.push(choice)
    }

    return choices
}

function generateRandomPassword(
    length,
    allowUpperLetters = true,
    allowDigits = true,
    allowSpecialChars = true
) {
    let characterIterator = `${lowerLetters}`

    if (allowUpperLetters) {
        characterIterator += upperLeters
    }

    if (allowDigits) {
        characterIterator += digits
    }

    if (allowSpecialChars) {
        characterIterator += specialChars
    }

    const randomPassword = randomChoices(characterIterator, length).join("")

    return randomPassword
}

export default generateRandomPassword