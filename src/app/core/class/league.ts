export class League {
    Id: string;
    NameLeague: string;
    Description: string;
    Status: boolean;
    IdUsuario: string;
    Like: number;

    constructor(opt?: {Id: string,nameLeague: string, Description: string, Status: boolean, IdUsuario: string, Like: number}) {
        this.Id = opt != undefined ?opt.Id : '';
        this.NameLeague = opt != undefined ? opt?.nameLeague : '';
        this.Description = opt != undefined ? opt?.Description : '';
        this.Status = opt != undefined ? opt?.Status : false;
        this.Like = opt != undefined ? opt?.Like : 0;
        this.IdUsuario = opt != undefined ? opt.IdUsuario : '';
    }
}
