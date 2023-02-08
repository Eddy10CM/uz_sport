export class Player {
    name: string;
    profilePic: string;
    birthday: string;
    address: string;
    position: string;
    favoritePlayer: string;
    email: string;
    contact: string;
    socialMedia: string;
    ratebyPlayer: number;
    ratebyleague: number;
    like: number;
    number: number;

    constructor(opt: {
        name: string,
        profilePic: string,
        birthday: string,
        address: string,
        position: string,
        favoritePlayer: string,
        email: string,
        contact: string,
        socialMedia: string,
        ratebyPlayer: number,
        ratebyleague: number,
        like: number,
        number: number,
    }) {
        this.name = opt.name;
        this.profilePic = opt.profilePic;
        this.birthday = opt.birthday;
        this.address = opt.address;
        this.position = opt.position;
        this.favoritePlayer = opt.favoritePlayer;
        this.email = opt.email;
        this.contact = opt.contact;
        this.socialMedia = opt.socialMedia;
        this.ratebyPlayer = opt.ratebyPlayer;
        this.ratebyleague = opt.ratebyleague;
        this.like = opt.like;
        this.number = opt.number;
    }
}
