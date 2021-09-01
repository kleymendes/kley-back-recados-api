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
exports.UserRepository = void 0;
const infra_1 = require("../../../../core/infra");
class UserRepository {
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, email, password } = params;
            const user = yield infra_1.UserEntity.create({
                username,
                email,
                password,
            }).save();
            return Object.assign({}, params, user);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield infra_1.UserEntity.find();
            return users.map(user => ({
                uid: user.uid,
                username: user.username,
                email: user.email,
                password: user.password,
            }));
        });
    }
    getByUid(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield infra_1.UserEntity.findOne(uid);
            if (!user) {
                return null;
            }
            return {
                uid: user.uid,
                username: user.username,
                email: user.email,
                password: user.password,
            };
        });
    }
    update(uid, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield infra_1.UserEntity.findOne(uid);
            if (!user) {
                return null;
            }
            user.username = params.username;
            user.email = params.email;
            user.save();
            return {
                uid: user.uid,
                username: user.username,
                email: user.email,
                password: user.password,
            };
        });
    }
    delete(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield infra_1.UserEntity.findOne(uid);
            if (user) {
                user.remove();
            }
        });
    }
}
exports.UserRepository = UserRepository;
