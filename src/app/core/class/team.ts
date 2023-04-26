export class Team {
    Id?:number;
    Name: string;
    Birthday: string;
    TeamLogo: string;
    Category:string;
    Captain:string;
    Contact:string;
    Email: string;    
    PhotoUrl: string;
    socialMedia:string;
    Rate:string;
    Players:string;//{Name:string;Id:number}[]
    fansLike:string;
    City:string;
    constructor(opt?: {
        Id:number;
        Name: string;
        Birthday: string;
        TeamLogo: string;
        Category:string;
        Captain:string;
        Contact:string;
        Email: string;    
        PhotoUrl: string;
        socialMedia:string;
        Rate:string;
        Players:string;//{Name:string;Id:number}[]
        fansLike:string;
        City:string;

        //roles: string[];
    }) {
        this.Id = opt != undefined ? opt.Id:0;   
        this.Name = opt != undefined ? opt.Name:'';        
        this.Birthday = opt != undefined ? opt.Birthday:'';        
        this.TeamLogo = opt != undefined ? opt.TeamLogo:'';        
        this.Category = opt != undefined ? opt.Category:'';        
        this.Captain = opt != undefined ? opt.Captain:'';        
        this.Contact = opt != undefined ? opt.Contact:'';        
        this.Email = opt != undefined ? opt.Email:'';        
        this.PhotoUrl = opt != undefined ? opt.PhotoUrl:'';        
        this.socialMedia = opt != undefined ? opt.socialMedia:'';        
        this.Rate = opt != undefined ? opt.Rate:'';        
        this.Players = opt != undefined ? opt.Players:'';        
        this.fansLike = opt != undefined ? opt.fansLike:'';        
        this.City = opt != undefined ? opt.City:'';        
       
    }
}
