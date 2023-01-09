export class Couch{
    Id?:string;
    Name:string;
    Experiencia:number;
    Specialty:string;
    ProfilePic:string;
    Contact:string;
    Rate:number;
    constructor(opt:{
        Id?:string;
        Name:string;
        Experiencia:number;
        Specialty:string;
        ProfilePic:string;
        Contact:string;
        Rate:number;
    }){
        this.Id = opt.Id!==undefined?opt.Id:'';
        this.Name = opt.Name!==undefined?opt.Name:'';
        this.Experiencia = opt.Experiencia!==undefined?opt.Experiencia:0;
        this.Specialty = opt.Specialty!==undefined?opt.Specialty:'';
        this.ProfilePic = opt.ProfilePic!==undefined?opt.ProfilePic:'';
        this.Contact = opt.Contact!==undefined?opt.Contact:'';
        this.Rate = opt.Rate!==undefined?opt.Rate:0;
    }
}