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
exports.CacheRepository = void 0;
const redis_1 = require("../data/connections/redis");
class CacheRepository {
    constructor() {
        this.setConnection();
    }
    setConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            this.redis = yield redis_1.Redis.getConnection();
        });
    }
    set(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.set(key, JSON.stringify(value));
        });
    }
    setex(key, value, ttl) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.redis.set(key, JSON.stringify(value), 'EX', ttl);
        });
    }
    get(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const value = yield this.redis.get(key);
            return value ? JSON.parse(value) : null;
        });
    }
    del(key) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.redis.del(key);
            return result !== 0;
        });
    }
}
exports.CacheRepository = CacheRepository;
