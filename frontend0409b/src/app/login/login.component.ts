import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

declare var bootstrap: any;  // Deklaráljuk a Bootstrap JS-ét, hogy használhassuk

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginObj = { email: '', password: '' };

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin() {
    this.authService.login(this.loginObj).subscribe(
      (response: any) => {
        console.log('Sikeres bejelentkezés', response);
        
        // Bootstrap modal kezelés
        const modalElement = document.getElementById('successModal');
        const modal = new bootstrap.Modal(modalElement); // Bootstrap Modal példányosítása
        modal.show(); // Modal megnyitása

        this.router.navigate(['/home']);
      },
      (error) => {
        console.error('Hiba a bejelentkezés során', error);
        
        // Sikertelen bejelentkezés modal megjelenítése
        const errorModalElement = document.getElementById('errorModal');
        const errorModal = new bootstrap.Modal(errorModalElement); // Sikertelen bejelentkezés modal példányosítása
        errorModal.show(); // Modal megnyitása

      }
    );
  }
}
