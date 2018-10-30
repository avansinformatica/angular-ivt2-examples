/**
 * 
 */
import { Observable, from } from 'rxjs'
import { map, reduce } from 'rxjs/operators'
import { Entity } from '../../core/base/entity.model';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * User roles.
 */
export enum UserRole {
    Basic = 0,
    Viewer = 1,
    Admin = 2,
    SuperUser = 3,
}

/**
 * String translations of roles
 */
const userRoleNames = [
    'Basic', 
    'Viewer',
    'Admin',
    'SuperUser'
]

/**
 * String translation, translates nr to rolename.
 */
@Pipe({ name: 'asRole' })
export class UserRoleNamePipe implements PipeTransform {
    transform(roleNr: number) {
        return userRoleNames[roleNr];
    }
}

export class User extends Entity {

    data: {
        firstname: string;
        lastname: string;
        email: string;
    };
    meta: {
        createdAt: Date;
        updatedAt: Date;
        loggedIn: Date[];
    };
    roles: UserRole[];

    constructor(values: any = {}) {
        super({ id: values.data.id })
        // Object.assign(this, values);
        // console.log(values)
        try {
            this.data = {
                firstname: values.data['firstname'],
                lastname: values.data['lastname'],
                email: values.data['email']
            }
            this.meta = {
                createdAt: new Date(),
                updatedAt: new Date(),
                loggedIn: [] // Update when user has logged in?
            }
            this.roles = [];
            if(values && values.roles && values.roles.length > 0){
                values.roles.forEach(role => this.roles.push(role));
            } 
        }
        catch(e) {
            console.error(e.toString())
        }
        console.dir(this)
    }

    public hasRole(rolename: UserRole): Observable<boolean> {
        return from(this.roles).pipe(
            map(val => val === rolename),
            reduce((a, b) => a || b)
        )
    }

    get fullName() {
        const fullname = this.data.firstname.trim().charAt(0) + '. ' + this.data.lastname;
        return fullname;
    }
}

// export class UserSerializer {
//     fromJson(json: any): User {
//         const user = new User();
//         user.id = json.id;
//         user.firstname = json.firstname;
//         user.cookedOn = moment(json.cookedOn, 'mm-dd-yyyy hh:mm');

//         return user;
//     }

//     toJson(user: User): any {
//         return JSON.stringify(user);
//     }
// }

