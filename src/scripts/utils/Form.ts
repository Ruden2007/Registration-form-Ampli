import {FormErrors} from "./Errors.js"

const EMAIL_REGEX: RegExp = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/
const MIN_PASSWORD_LENGTH: number = 6

export class FormValidator {
    callback: CallableFunction
    errors: FormErrors

    constructor(callback: CallableFunction, errors: FormErrors) {
        this.callback = callback
        this.errors = errors
    }

    validateEmail(emailInput: HTMLInputElement) {
        const isValid = EMAIL_REGEX.test(emailInput.value)
        const label = emailInput.closest('label')

        if (isValid) {
            label.classList.remove('invalid-input')
            this.errors.remove(FormErrors.invalid.email)
        } else {
            label.classList.add('invalid-input')
            this.errors.push(FormErrors.invalid.email)
        }

        this.callback(this.errors)
    }

    validatePassword(passwordInput: HTMLInputElement, matchPass: string) {
        const isMatching = matchPass === passwordInput.value
        const isLengthValid = passwordInput.value.length >= MIN_PASSWORD_LENGTH
        const label = passwordInput.closest('label')

        if ((matchPass !== '' && isMatching) || (matchPass === '' && isLengthValid)) {
            label.classList.remove('invalid-input')
            if (matchPass !== '' && isMatching) this.errors.remove(FormErrors.invalid.pass)
        } else {
            label.classList.add('invalid-input')
            this.errors.push(FormErrors.invalid.pass)
        }

        this.callback(this.errors)
    }
}
