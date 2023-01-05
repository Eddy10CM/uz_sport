export class CardMember {
    title: string;
    subtitulo: string;
    route: string;

    constructor(opts?: {title: string, subtitulo: string, route: string}) {
        this.title = opts != undefined ? opts.title : '';
        this.subtitulo = opts != undefined ? opts.subtitulo : '';
        this.route = opts != undefined ? opts.route : '';
    }
}
