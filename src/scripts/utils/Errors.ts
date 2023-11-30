export class Errors {
    _errors: string[] = []

    constructor(errors: string[] = []) {
        this._errors = errors
    }

    push(error: string) {
        if (this._errors.indexOf(error) !== -1) return false

        this._errors.push(error)
    }

    remove(error: string) {
        this._errors = this._errors.filter(e => e !== error)
    }

    get length() {
        return this._errors.length
    }
}

export class FormErrors extends Errors {
    static invalid = {
        pass: "invalidPass",
        email: "invalidEmail",
    }
}
