import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument, DocumentReference } from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface User {
  id?: string,
  firstname?: string,
  lastname?: string,
  points?: number,
  email?: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
	private users: Observable<User[]>;
	private userCollection: AngularFirestoreCollection<User>;

  	constructor(
  		private afs: AngularFirestore
	){ 
  		this.userCollection = this.afs.collection<User>('users');
  		this.users = this.userCollection.snapshotChanges().pipe(
			map(actions => {
				return actions.map(a => {
					const data = a.payload.doc.data();
					const id = a.payload.doc.id;
					return { id, ...data };
				});
			})
    	);
	}

	getUsers(): Observable<User[]> {
    	return this.users;
  	}

	getUser(id: string): Observable<User> {
		return this.userCollection.doc<User>(id).valueChanges().pipe(
			take(1),
			map(user => {
				user.id = id;
				return user
			})
	  );
	}

	addUser(user: User, id: string): Promise<void> {
		// return this.userCollection.add(user);
		return this.userCollection.doc(id).set(user);
	}

 	updateUser(user: User): Promise<void> {
 		return this.userCollection.doc(user.id).update({ 
 			firstname: user.firstname,
 			lastname: user.lastname,
 			points: user.points,
 			email: user.email,
 		});
 	}
 
 	deleteUser(id: string): Promise<void> {
 		return this.userCollection.doc(id).delete();
 	}
}