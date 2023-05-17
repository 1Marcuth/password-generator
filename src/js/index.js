import generateRandomPassword from "./password-generator.js"

const $generatePassword = document.querySelector("#generate-password")

function generateAndShowPassword(event) {
    const $passwordLength = document.querySelector("#password-length")

    const passwordLength = Number($passwordLength.value)

    if (isNaN(passwordLength) || passwordLength <= 0) return alert("Ditite um número válido!")

    const allowUpperLetters = document.querySelector("#allow-upper-letters").checked
    const allowDigits = document.querySelector("#allow-digits").checked
    const allowSpecialChars = document.querySelector("#allow-special-chars").checked

    const randomPassword = generateRandomPassword(
        passwordLength,
        allowUpperLetters,
        allowDigits,
        allowSpecialChars
    )

    alert(`Sua senha é: ${randomPassword}`)
}

$generatePassword.addEventListener("click", generateAndShowPassword)