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
exports.routerMvcAdapter = exports.routerAdapter = void 0;
const enums_1 = require("./../enums");
const routerAdapter = (controller) => {
    return (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const httpRequest = {
            body: request.body,
            params: request.params,
        };
        const httpResponse = yield controller.handle(httpRequest);
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            response.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            response
                .status(httpResponse.statusCode)
                .json({ error: httpResponse.body.message });
        }
    });
};
exports.routerAdapter = routerAdapter;
const routerMvcAdapter = (controller, type) => {
    return (request, response) => __awaiter(void 0, void 0, void 0, function* () {
        const httpRequest = {
            body: request.body,
            params: request.params,
        };
        let httpResponse;
        switch (type) {
            case enums_1.EMVC.INDEX:
                httpResponse = yield controller.index(httpRequest);
                break;
            case enums_1.EMVC.SHOW:
                httpResponse = yield controller.show(httpRequest);
                break;
            case enums_1.EMVC.STORE:
                httpResponse = yield controller.store(httpRequest);
                break;
            case enums_1.EMVC.UPDATE:
                httpResponse = yield controller.update(httpRequest);
                break;
            case enums_1.EMVC.DELETE:
                httpResponse = yield controller.delete(httpRequest);
                break;
        }
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            response.status(httpResponse.statusCode).json(httpResponse.body);
        }
        else {
            response
                .status(httpResponse.statusCode)
                .json({ error: httpResponse.body.message });
        }
    });
};
exports.routerMvcAdapter = routerMvcAdapter;
