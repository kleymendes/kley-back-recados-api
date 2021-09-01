"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiddleware = void 0;
const presentation_1 = require("../../../../core/presentation");
const presentation_2 = require("../../../../core/presentation");
class UserMiddleware {
    constructor() {
        this.fields = ['username', 'email', 'password'];
    }
    handle(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const body = request.body;
            for (const field of this.fields) {
                const error = new presentation_2.RequireFieldsValidator(field).validate(body);
                if (error) {
                    return presentation_1.badRequest(error);
                }
            }
            return presentation_1.ok({});
        });
    }
}
exports.UserMiddleware = UserMiddleware;
