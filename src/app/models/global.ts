export class Global {

    public url = 'http://localhost:3000/';

    // -----Style Propierties, that comunicate with styles.scss for change any propierties-----
    // ----------//----------//----------//----------//----------
    public black: any = getComputedStyle(document.body).getPropertyValue('--black');
    public darkBlur: any = getComputedStyle(document.body).getPropertyValue('--dark-blur');
    public white: any = getComputedStyle(document.body).getPropertyValue('--white');
    public grey: any = getComputedStyle(document.body).getPropertyValue('--grey');
    public red: any = getComputedStyle(document.body).getPropertyValue('--red');
    // ----------//----------//----------//----------//----------
    constructor(
    ) {}
}
