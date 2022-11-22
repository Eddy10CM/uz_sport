export class Tournament {
    Id: string;
    Description: string;
    IdLeague: string;
    Logo: string;
    Name: string;

    constructor(opt?: {
        Id: string,
        Description: string,
        IdLeague: string,
        Logo: string,
        Name: string
    }) {
        this.Id = opt != undefined ? opt.Id : '';
        this.Description = opt != undefined ? opt.Description : '';
        this.IdLeague = opt != undefined ? opt.IdLeague : '';
        this.Logo = opt != undefined ? opt.Logo : '';
        this.Name = opt != undefined ? opt.Name : '';
    }
}
