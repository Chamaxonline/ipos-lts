import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { User } from './model/user.model';
import { AccountService } from './services/account.service';
import { CryptoService } from './shared/services/crypto.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent {
  title = 'I-POS';

  constructor(
    public accountService: AccountService,
    private cryptoService: CryptoService
  ) {}

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser() {
    let user: User;
    const userValue = localStorage.getItem('user');
    if (userValue && userValue != 'null') {
      var decUser = this.cryptoService.decrypt(userValue);
      user = JSON.parse(decUser);
      this.accountService.setCurrentUser(user);
    } else {
      this.accountService.removeCurrentUser();
    }
  }
}
