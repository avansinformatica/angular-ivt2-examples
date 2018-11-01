/*
A user has a name and an array of posts. We can get some
aggregated values from the user: the number of posts
and the total number of likes.
*/

import { Post } from "./post.model";

export class User {
    constructor(public name: string, public posts: Post[]) {}

    getNumberOfPosts() {
        return this.posts.length;
    }

    getNumberOfLikes() {
        // use reduce to add all likes together
        return this.posts.reduce((total: number, post: Post) => total + post.likes, 0);

        // the line above is equivalent to this for loop:
        /*
        total: number = 0;
        for(let post of this.posts) {
            total = total + post.likes;
        }
        return total;
        */
    }
}