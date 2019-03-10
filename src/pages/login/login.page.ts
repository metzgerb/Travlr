import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	user = {
		email: '',
		password: ''
	}

	errorMessage = '';

	constructor(
		private auth: AuthService,
	) { }

	login() {
		this.auth.signInWithEmail(this.user)
			.then((user) => {
				this.errorMessage = '';
				this.auth.authenticationState.next(true);
			})
			.catch((err) => {
				this.errorMessage = err.message;
			})
	}

	ngOnInit() {
	}

}
