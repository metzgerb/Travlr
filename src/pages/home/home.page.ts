import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  uid: string;

  user: User;
  
	constructor(
		private auth: AuthService,
    private userService: UserService,
	) {
      this.uid = this.auth.user;

      this.user = { 
        firstname: '',
        lastname: '',
        points: 0,
        email: ''
      }  

      console.log(this.uid);

      this.userService.getUser(this.uid).subscribe(user => {
        // console.log(user);
        this.user = user;
      });
  }
 
  ngOnInit() { }

  logout() {
    this.auth.logout();
  }
}
