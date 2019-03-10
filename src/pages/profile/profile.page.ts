import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User, UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {


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
        console.log(user);
        this.user = user;
      });
  }

  ngOnInit() {
  }

}
