export class Card {
    constructor(
        public id: string = "",
        public title: string = "",
        public price: string = "",
        public categories: any = [],
        public description: string = "",
        // This variable need type and then delete this comment
        public pdf: any = "",
        public img: string = "",
        public pagesNumber: number = 0,
    ){ }
}