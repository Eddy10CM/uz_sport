import { Roles } from './roles';
export class User {
    address: string;
    birthday: string;
    city: string;
    email: string;
    firstName: string;
    gender: string;
    lastName: string;
    phone: number;
    photoUrl: string;
    role: number;
    password:string;
    //roles: string[];

    constructor(opt?: {
        address: string;
        birthday: string;
        city: string;
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
        this.address = opt != undefined ? opt.address : '';
        this.birthday = opt != undefined ? opt.birthday : '';
        this.city = opt != undefined ? opt.city : '';
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
