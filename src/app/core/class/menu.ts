export class Menu {
    title: string;
    url: string;

    constructor(opt: {title: string, url: string}) {
        this.title = opt.title;
        this.url = opt.url;
    }
}
