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
exports.ScrapRepository = void 0;
const infra_1 = require("../../../../core/infra");
class ScrapRepository {
    create(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { title, description, userUID } = params;
            const scrap = yield infra_1.ScrapEntity.create({
                title,
                description,
                userUID,
            }).save();
            return Object.assign({}, params, scrap);
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const scraps = yield infra_1.ScrapEntity.find();
            return scraps.map(scrap => ({
                uid: scrap.uid,
                title: scrap.title,
                description: scrap.description,
                userUID: scrap.userUID,
            }));
        });
    }
    getByUid(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const scrap = yield infra_1.ScrapEntity.findOne(uid);
            if (!scrap) {
                return null;
            }
            return {
                uid: scrap.uid,
                title: scrap.title,
                description: scrap.description,
                userUID: scrap.userUID,
            };
        });
    }
    update(uid, params) {
        return __awaiter(this, void 0, void 0, function* () {
            const scrap = yield infra_1.ScrapEntity.findOne(uid);
            if (!scrap) {
                return null;
            }
            scrap.title = params.title;
            scrap.description = params.description;
            scrap.save();
            return {
                uid: scrap.uid,
                title: scrap.title,
                description: scrap.description,
                userUID: scrap.userUID,
            };
        });
    }
    delete(uid) {
        return __awaiter(this, void 0, void 0, function* () {
            const scrap = yield infra_1.ScrapEntity.findOne(uid);
            if (scrap) {
                scrap.remove();
            }
        });
    }
}
exports.ScrapRepository = ScrapRepository;
