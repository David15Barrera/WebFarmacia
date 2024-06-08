import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  check: number = 0;

  ngOnInit(): void {
    const cta = document.querySelector('.cta') as HTMLElement;

    if (cta) {
      cta.addEventListener('click', (e: Event) => this.handleCtaClick(e));
    }
  }

  handleCtaClick(event: Event): void {
    const target = event.target as HTMLElement;
    const text = target.nextElementSibling as HTMLElement;
    const loginText = target.parentElement as HTMLElement;

    if (text && loginText) {
      text.classList.toggle('show-hide');
      loginText.classList.toggle('expand');

      if (this.check === 0) {
        target.innerHTML = '<i class="fas fa-chevron-up"></i>';
        this.check++;
      } else {
        target.innerHTML = '<i class="fas fa-chevron-down"></i>';
        this.check = 0;
      }
    }
  }
  

  onButtonClick() {
    this.router.navigate(['admin']);
  }
}
