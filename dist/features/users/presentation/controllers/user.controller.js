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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _UserController_repository, _UserController_cache;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const presentation_1 = require("../../../../core/presentation");
class UserController {
    constructor(repository, cache) {
        _UserController_repository.set(this, void 0);
        _UserController_cache.set(this, void 0);
        __classPrivateFieldSet(this, _UserController_repository, repository, "f");
        __classPrivateFieldSet(this, _UserController_cache, cache, "f");
    }
    index(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cache = yield __classPrivateFieldGet(this, _UserController_cache, "f").get('user:all');
                if (cache) {
                    return presentation_1.ok(cache);
                }
                const users = yield __classPrivateFieldGet(this, _UserController_repository, "f").getAll();
                yield __classPrivateFieldGet(this, _UserController_cache, "f").set('user:all', users);
                return presentation_1.ok(users);
            }
            catch (error) {
                return presentation_1.serverError();
            }
        });
    }
    show(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { uid } = request.params;
                const cache = yield __classPrivateFieldGet(this, _UserController_cache, "f").get(`user:${uid}`);
                if (cache) {
                    return presentation_1.ok(cache);
                }
                const user = yield __classPrivateFieldGet(this, _UserController_repository, "f").getByUid(uid);
                if (!user) {
                    return presentation_1.notFound();
                }
                yield __classPrivateFieldGet(this, _UserController_cache, "f").set(`user:${uid}`, user);
                return presentation_1.ok(user);
            }
            catch (error) {
                return presentation_1.serverError();
            }
        });
    }
    store(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield __classPrivateFieldGet(this, _UserController_repository, "f").create(request.body);
                yield __classPrivateFieldGet(this, _UserController_cache, "f").del('user:all');
                return presentation_1.ok(user);
            }
            catch (error) {
                return presentation_1.serverError();
            }
        });
    }
    update(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { uid } = request.params;
                const user = yield __classPrivateFieldGet(this, _UserController_repository, "f").update(uid, request.body);
                yield __classPrivateFieldGet(this, _UserController_cache, "f").set(`user:${uid}`, user);
                yield __classPrivateFieldGet(this, _UserController_cache, "f").del('user:all');
                return presentation_1.ok(user);
            }
            catch (error) {
                return presentation_1.serverError();
            }
        });
    }
    delete(request) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { uid } = request.params;
                yield __classPrivateFieldGet(this, _UserController_repository, "f").delete(uid);
                yield __classPrivateFieldGet(this, _UserController_cache, "f").del(`user:${uid}`);
                yield __classPrivateFieldGet(this, _UserController_cache, "f").del('user:all');
                return presentation_1.ok({});
            }
            catch (error) {
                return presentation_1.serverError();
            }
        });
    }
}
exports.UserController = UserController;
_UserController_repository = new WeakMap(), _UserController_cache = new WeakMap();
