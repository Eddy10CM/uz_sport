export class Team {
    name: string;
    birthday: string;
    teamLogo: string;
    email: string;
    firstName: string;
    gender: string;
    lastName: string;
    phone: number;
    photoUrl: string;
    role: number;
    password:string;

    constructor(opt?: {
        name: string;
        birthday: string;
        teamLogo: string;
        email: string;
        firstName: string;
        gender: string;
        lastName: string;
        phone: number;
        photoUrl: string;
        role: number;
        password:string;

        //roles: string[];
    }) {
        this.name = opt != undefined ? opt.name : '';
        this.birthday = opt != undefined ? opt.birthday : '';
        this.teamLogo = opt != undefined ? opt.teamLogo : '';
        this.email = opt != undefined ? opt.email : '';
        this.firstName = opt != undefined ? opt.firstName : '';
        this.gender = opt != undefined ? opt.gender : '';
        this.lastName = opt != undefined ? opt.lastName : '';
        this.phone = opt != undefined ? opt.phone : 0;
        this.photoUrl = opt != undefined ? opt.photoUrl : '';
        this.role = opt != undefined ? opt.role : 0;
        this.password = opt != undefined ? opt.password : '';
        //this.roles = opt != undefined ? opt.roles : [];
    }
}
