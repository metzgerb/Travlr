import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { map } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { Storage } from '@ionic/storage';
import { User, UserService } from './user.service';

const TOKEN = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	authenticationState = new BehaviorSubject(false);
	error: string;
	user: string;

	constructor(
		private fireAuth: AngularFireAuth,
		private platform: Platform,
		private storage: Storage,
		private userService: UserService,
	) { 
		this.platform.ready().then(() => {
			this.checkToken();
		})
	}

	checkToken() {
		return this.storage.get(TOKEN).then(res => {
			if(res) {
				this.user = res;
				// console.log(res);
				this.authenticationState.next(true);
			}
		})
	}

	isAuthenticated() {
		return this.authenticationState.value;
	}

	signInWithEmail(credentials) {
		
		return this.fireAuth.auth.signInWithEmailAndPassword(credentials.email, 
			credentials.password).then(res => {
				// console.log(res);
				this.user = res.user.uid;
				this.storage.set(TOKEN, res.user.uid).then(res => {
					
					this.authenticationState.next(true);
				});
			});
	}

	register(credentials) {
		return this.fireAuth.auth.createUserWithEmailAndPassword(credentials.email, 
			credentials.password).then(res => {
				// console.log(res.user.uid, credentials.firstname, credentials.lastname);
				this.user = res.user.uid;
				// console.log(this.user);

				this.userService.addUser(
					{ 
						id: res.user.uid, 
						firstname: credentials.firstname, 
						lastname: credentials.lastname, 
						email: credentials.email,
						points: 0 
					},
					res.user.uid
				);

				this.storage.set(TOKEN, res.user.uid).then(res => {
					this.authenticationState.next(true);
				});
			})
	}

	logout() {
		this.storage.remove(TOKEN).then(() => {
			this.authenticationState.next(false);
		});
		return this.fireAuth.auth.signOut();
	}

}
