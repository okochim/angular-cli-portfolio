import { Component }        from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService }      from '../stores/authStore';

@Component({
  selector: 'todoLogin',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
    constructor(private authService: AuthService, private router: Router) {
    }
    login() {
        this.authService.login().subscribe(() => {
            if (this.authService.isLoggedIn) {
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/portfolio';
                let navigationExtras: NavigationExtras = {
                    preserveQueryParams: true,
                    preserveFragment: true
                };
                this.router.navigate([redirect], navigationExtras);
            }
        });
    }
    logout() {
        this.authService.logout();
    }
}
