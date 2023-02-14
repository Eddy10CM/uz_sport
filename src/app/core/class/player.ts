export class Player {
    Id?:string;
    Contact:string;
    IdUsuario?:string;
    address:string;
    birthday:string;
    email:string;
    name:string;
    photoUrl:string;
    position:string;
    socialMedia:string;
    constructor(opt: {
        Id?:string,
        Contact:string;
        IdUsuario?:string;
        address:string;
        birthday:string;
        email:string;
        name:string;
        photoUrl:string;
        position:string;
        socialMedia:string;
    }) {
        this.Id = opt.Id!==undefined?opt.Id:'';
        this.name = opt.name;
        this.photoUrl = opt.photoUrl;
        this.birthday = opt.birthday;
        this.address = opt.address;
        this.position = opt.position;
        this.email = opt.email;
        this.Contact = opt.Contact;
        this.socialMedia = opt.socialMedia;
    }
}
