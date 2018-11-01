import { User } from './user.model';
import { Post } from './post.model';

/*
Some fake data as a constant to display. In other examples
you can learn how to send data to other components and modules:
look at services and rxjs.
*/
export const users_const: User[] = [
    new User('John', [
      new Post('Discovering Angular', 'Let\'s learn Angular', 10),
      new Post('Making an app', 'Start with the CLI', 4),
      new Post('Routing', 'Use the router!', 16)
    ]),
    new User('Jane', [
      new Post('Angular is cool', 'Did you see John\'s post?', 11),
      new Post('Learning', 'Learning a lot about routing', 7)
    ]),
  ]