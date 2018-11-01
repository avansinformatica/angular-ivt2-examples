/*
A post has a title, some content and a number of likes. The number
of likes is just a mock number at the moment.
*/

export class Post {
    constructor(
        public title: string, 
        public content: string, 
        public likes: number
    ) {}
}