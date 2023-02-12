export class CardMember {
    title: string;
    subtitulo: string;
    route: string;
    typeRol: number;

    constructor(opts?: {title: string, subtitulo: string, route: string, typeRol: number}) {
        this.title = opts != undefined ? opts.title : '';
        this.subtitulo = opts != undefined ? opts.subtitulo : '';
        this.route = opts != undefined ? opts.route : '';
        this.typeRol = opts != undefined ? opts.typeRol : 0;
    }
}
