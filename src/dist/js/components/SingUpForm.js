import { FormErrors, FormValidator } from "../utils/index.js";
var submitBtn = document.querySelector('form.SingUpForm button[type="submit"]');
var passInput = document.querySelector('form.SingUpForm input[name="pass"]');
var repassInput = document.querySelector('form.SingUpForm input[name="pass-repeat"]');
document.querySelectorAll('form.SingUpForm textarea').forEach(function (value) {
    value.addEventListener('input', function () {
        value.style.removeProperty('height');
        value.style.height = (value.scrollHeight) + "px";
    });
});
var errors = new FormErrors([
    FormErrors.invalid.email,
    FormErrors.invalid.pass
]);
var valid = new FormValidator(checkErrors, errors);
document.querySelector('form.SingUpForm').addEventListener('input', function (e) {
    if (!(e.target instanceof HTMLElement) || e.target.tagName !== 'INPUT')
        return false;
    var target = e.target;
    if (target.type === 'email') {
        valid.validateEmail(target);
    }
    else if (target.name === 'pass') {
        valid.validatePassword(target, repassInput.value);
    }
    else if (target.name === 'pass-repeat') {
        valid.validatePassword(target, passInput.value);
    }
});
function checkErrors(errors) {
    submitBtn.disabled = errors.length > 0;
}
//# sourceMappingURL=SingUpForm.js.map