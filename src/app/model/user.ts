export interface IUser {
    login: string
    id: string
    name: string
    avatar: string
}

export class User implements IUser{
    
    constructor(
        public login: string,
        public id: string,
        public name: string,
        public avatar: string
    ){}

}
