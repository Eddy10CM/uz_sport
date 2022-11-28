export class Login { 
    kind: string;
    localId: string;
    email: string;
    displayName: string;
    idToken: string;
    registered: boolean;
    refreshToken: string;
    expiresIn: number;

    constructor(opt?: {
        kind: string,
        localId: string,
        email: string,
        displayName: string,
        idToken: string,
        registered: boolean,
        refreshToken: string,
        expiresIn: number,
    }) {
        this.kind = opt != undefined ? opt.kind : '';
        this.localId = opt != undefined ? opt.localId : '';
        this.email = opt != undefined ? opt.email : '';
        this.displayName = opt != undefined ? opt.displayName : '';
        this.idToken = opt != undefined ? opt.idToken : '';
        this.registered = opt != undefined ? opt.registered : false; 
        this.refreshToken = opt != undefined ? opt.refreshToken : '';
        this.expiresIn = opt != undefined ? opt.expiresIn : 0;
    }
}