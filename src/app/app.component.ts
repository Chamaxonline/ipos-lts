import { Component, OnInit, DoCheck } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';
import { User } from './model/user.model';
import { AccountService } from './services/account.service';
import { CryptoService } from './shared/services/crypto.service';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SideNavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit, DoCheck {
  title: string = 'I-POS';

  constructor(
    public accountService: AccountService,
    private cryptoService: CryptoService,
    private titleService: Title,
    private router: Router
  ) {
    this.title = this.titleService.getTitle() ?? 'I-POS';
  }

  ngOnInit() {
    this.setCurrentUser();
  }

  ngDoCheck() {
    this.title = this.titleService.getTitle() ?? 'I-POS';
    const mobileScreen = window.matchMedia('(max-width: 990px )');
    if (mobileScreen.matches) {
      this.router.events.subscribe((val) => {
        const navbar = document.getElementById('iposNav');
        if (navbar) {
          navbar.classList.remove('show');
        }
      });
    }
  }

  setCurrentUser() {
    // let user: User;
    // const userValue = localStorage.getItem('user');
    // if (userValue && userValue != 'null') {
    //   var decUser = this.cryptoService.decrypt(userValue);
    //   user = JSON.parse(decUser);
    //   this.accountService.setCurrentUser(user);
    // } else {
    //   this.accountService.removeCurrentUser();
    // }
  }

  setTitle() {}
}
