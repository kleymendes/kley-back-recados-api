import {
    HttpRequest,
    notFound,
    ok,
    serverError,
    ProjectController,
    
} from '../../../../../src/features/scraps/presentation';

import {
    ScrapRepository,
    CacheRepository

} from '../../../../../src/features/scraps/infra';

import { Scrap } from '../../../../../src/core/domain/models';

jest.mock('../../../../../src/features/scraps/infa/repositories/Scrap.repository.ts ');
jest.mock('../../../../../src/features/scraps/infa/repositories/cache.repository.ts ');

const makeRequestStore  = (): HttpRequest => ({
    body: {
        name: 'any_name',
        description: 'any_description',
        startAt: new Date(Date.now()).toLocaleDateString(),
        finishAt: new Date(Date.now()).toLocaleDateString(),
        userUid: 'any_uid'
    },
    params: {}
});

const makeRequestshow = ():  HttpRequest => ({
    body: {

    },
    params: { uid: 'any_uid'}
});

// const makeRequestResult = ():  Project => ({
//     uid: 'any_uid',
//     name: 'any_name',
//     userUID: 'any_uid'
// });

const makeSut = (): ProjectController => {
return new ProjectController(new ScrapRepository(), new CacheRepository())
}
