"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presentation_1 = require("../../../../core/presentation");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const infra_1 = require("../../infra");
const infra_2 = require("../../infra");
const presentation_2 = require("../../../../core/presentation");
const makeController = () => {
    const repository = new infra_1.UserRepository();
    const cache = new infra_2.CacheRepository();
    return new controllers_1.UserController(repository, cache);
};
class UserRoutes {
    init(routes) {
        routes.get('/users', presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.INDEX));
        routes.get('/users/:userUID', presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.SHOW));
        routes.post('/users', presentation_2.middlewareAdapter(new middlewares_1.UserMiddleware()), presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.STORE));
        routes.put('/users/:userUID', presentation_2.middlewareAdapter(new middlewares_1.UserMiddleware()), presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.UPDATE));
        routes.delete('/users/:userUID', presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.DELETE));
    }
}
exports.default = UserRoutes;
