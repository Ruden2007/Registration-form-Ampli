import { FormErrors } from "./Errors.js";
var EMAIL_REGEX = /^([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+)\.([a-zA-Z]{2,})$/;
var MIN_PASSWORD_LENGTH = 6;
var FormValidator = /** @class */ (function () {
    function FormValidator(callback, errors) {
        this.callback = callback;
        this.errors = errors;
    }
    FormValidator.prototype.validateEmail = function (emailInput) {
        var isValid = EMAIL_REGEX.test(emailInput.value);
        var label = emailInput.closest('label');
        if (isValid) {
            label.classList.remove('invalid-input');
            this.errors.remove(FormErrors.invalid.email);
        }
        else {
            label.classList.add('invalid-input');
            this.errors.push(FormErrors.invalid.email);
        }
        this.callback(this.errors);
    };
    FormValidator.prototype.validatePassword = function (passwordInput, matchPass) {
        var isMatching = matchPass === passwordInput.value;
        var isLengthValid = passwordInput.value.length >= MIN_PASSWORD_LENGTH;
        var label = passwordInput.closest('label');
        if ((matchPass !== '' && isMatching) || (matchPass === '' && isLengthValid)) {
            label.classList.remove('invalid-input');
            if (matchPass !== '' && isMatching)
                this.errors.remove(FormErrors.invalid.pass);
        }
        else {
            label.classList.add('invalid-input');
            this.errors.push(FormErrors.invalid.pass);
        }
        this.callback(this.errors);
    };
    return FormValidator;
}());
export { FormValidator };
//# sourceMappingURL=Form.js.map