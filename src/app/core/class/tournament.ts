export class Tournament {
    Id: string;
    Description: string;
    IdLeague: string;
    Logo: string;
    Name: string;
    EndDate: string;
    StartDate: string;
    InicioDeJuegos: number;
    Precio: number;
    EndJuego: number;
    DiasDeJuego: string[];
    Categoria: string;
    

    constructor(opt?: {
        Id: string,
        Description: string,
        IdLeague: string,
        Logo: string,
        Name: string,
        EndDate: string,
        StartDate: string,
        InicioDeJuegos: number,
        Precio: number,
        EndJuego: number,
        DiasDeJuego: string[],
        categoria: string
    }) {
        this.Id = opt != undefined ? opt.Id : '';
        this.Description = opt != undefined ? opt.Description : '';
        this.IdLeague = opt != undefined ? opt.IdLeague : '';
        this.Logo = opt != undefined ? opt.Logo : '';
        this.Name = opt != undefined ? opt.Name : '';
        this.EndDate = opt != undefined ? opt.EndDate : '';
        this.StartDate = opt != undefined ? opt.StartDate : '';
        this.InicioDeJuegos = opt != undefined ? opt.InicioDeJuegos : 0;
        this.Precio = opt != undefined ? opt.Precio : 0;
        this.EndJuego = opt != undefined ? opt.EndJuego : 0;
        this.DiasDeJuego = opt != undefined ? opt.DiasDeJuego : [];
        this.Categoria = opt != undefined ? opt.categoria : '';
    }
}
