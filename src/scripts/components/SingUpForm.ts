import {FormErrors, FormValidator} from "../utils/index.js"

const submitBtn: HTMLButtonElement = document.querySelector('form.SingUpForm button[type="submit"]')
const passInput: HTMLInputElement = document.querySelector('form.SingUpForm input[name="pass"]')
const repassInput: HTMLInputElement = document.querySelector('form.SingUpForm input[name="pass-repeat"]')


document.querySelectorAll('form.SingUpForm textarea').forEach((value: HTMLTextAreaElement) => {
    value.addEventListener('input', () => {
        value.style.removeProperty('height')
        value.style.height = (value.scrollHeight) + "px"
    })
})

const errors = new FormErrors([
    FormErrors.invalid.email,
    FormErrors.invalid.pass
])

const valid = new FormValidator(checkErrors, errors)

document.querySelector('form.SingUpForm').addEventListener('input', (e) => {
    if (!(e.target instanceof HTMLElement) || e.target.tagName !== 'INPUT') return false

    const target = e.target as HTMLInputElement

    if (target.type === 'email') {
        valid.validateEmail(target as HTMLInputElement)
    } else if (target.name === 'pass') {
        valid.validatePassword(target as HTMLInputElement, repassInput.value)
    } else if (target.name === 'pass-repeat') {
        valid.validatePassword(target as HTMLInputElement, passInput.value)
    }
})

function checkErrors(errors: FormErrors) {
    submitBtn.disabled = errors.length > 0
}
