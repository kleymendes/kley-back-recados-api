import { Scrap } from './recados.model';

export interface User {
    uid: string;
    username: string;
    email: string;
    password?: string;
    scraps?: Scrap[];
}
