"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const presentation_1 = require("../../../../core/presentation");
const presentation_2 = require("../../../../core/presentation");
const controllers_1 = require("../controllers");
const middlewares_1 = require("../middlewares");
const infra_1 = require("../../infra");
const infra_2 = require("../../infra");
const makeController = () => {
    const repository = new infra_1.ScrapRepository();
    const cache = new infra_2.CacheRepository();
    return new controllers_1.ScrapController(repository, cache);
};
class ScrapRoutes {
    init(routes) {
        routes.get('/users/:userUID/scraps', presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.INDEX));
        routes.get('/users/:userUID/scraps/:uid', presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.SHOW));
        routes.post('/users/:userUID/scraps', presentation_2.middlewareAdapter(new middlewares_1.ScrapMiddleware()), presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.STORE));
        routes.put('/users/:userUID/scraps/:uid', presentation_2.middlewareAdapter(new middlewares_1.ScrapMiddleware()), presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.UPDATE));
        routes.delete('/users/:userUID/scraps/:uid', presentation_2.routerMvcAdapter(makeController(), presentation_1.EMVC.DELETE));
    }
}
exports.default = ScrapRoutes;
