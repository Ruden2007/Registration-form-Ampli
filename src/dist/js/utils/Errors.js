var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Errors = /** @class */ (function () {
    function Errors(errors) {
        if (errors === void 0) { errors = []; }
        this._errors = [];
        this._errors = errors;
    }
    Errors.prototype.push = function (error) {
        if (this._errors.indexOf(error) !== -1)
            return false;
        this._errors.push(error);
    };
    Errors.prototype.remove = function (error) {
        this._errors = this._errors.filter(function (e) { return e !== error; });
    };
    Object.defineProperty(Errors.prototype, "length", {
        get: function () {
            return this._errors.length;
        },
        enumerable: false,
        configurable: true
    });
    return Errors;
}());
export { Errors };
var FormErrors = /** @class */ (function (_super) {
    __extends(FormErrors, _super);
    function FormErrors() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FormErrors.invalid = {
        pass: "invalidPass",
        email: "invalidEmail",
    };
    return FormErrors;
}(Errors));
export { FormErrors };
//# sourceMappingURL=Errors.js.map