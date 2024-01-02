import { UserRegisterRM } from './../model/request-models/register/user-register-rm';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../model/user.model';
import { CryptoService } from '../shared/services/crypto.service';
import { BaseService } from './base.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AccountService extends BaseService {
  private readonly baseUrl = '/api/';

  private currentUserSource: BehaviorSubject<User | null>;
  currentUser$: Observable<User | null>;

  constructor(
    http: HttpClient,
    private cryptoService: CryptoService,
    private router: Router
  ) {
    super(http);
    this.currentUserSource = new BehaviorSubject<User | null>(null);
    this.currentUser$ = this.currentUserSource.asObservable();
  }

  register(user: UserRegisterRM) {
    return this.post<any>(`${this.baseUrl}user/register`, user);
  }

  login(model: any) {
    return this.http
      .post(this.baseUrl + 'user/authenticate', model, {
        withCredentials: true,
      })
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            this.setCurrentUser(user);
            return user;
          }
        })
      );
  }

  isSignIn(userId: string) {
    return this.http
      .get(this.baseUrl + `user/isSignIn?userId=${userId}`, {
        withCredentials: true,
      })
      .pipe(
        map((response: any) => {
          return response;
        })
      );
  }

  refreshToken() {
    return this.http
      .post(this.baseUrl + 'user/refresh-token', {}, { withCredentials: true })
      .pipe(
        map((response: any) => {
          const user = response;
          if (user) {
            this.setCurrentUser(user);
            return user;
          }
        })
      );
  }

  logout(optionalErrorMessage?: string) {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    this.router.navigate(['/account']);
  }

  setCurrentUser(user: User) {
    // this.startRefreshTokenTimer(user.jwtToken);
    var enriptedUser = this.cryptoService.encrypt(JSON.stringify(user));
    localStorage.setItem('user', enriptedUser);
    this.currentUserSource.next(user);
  }

  removeCurrentUser() {
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
  }

  // getDecodedToken(token: string) {
  //   const helper = new JwtHelperService();
  //   const decodedToken = helper.decodeToken<TokenData>(token);
  //   return decodedToken;
  // }

  // private refreshTokenTimeout: any;

  // private startRefreshTokenTimer(token:string) {
  //     // parse json object from base64 encoded jwt token
  //     const jwtToken = JSON.parse(atob(token.split('.')[1]));

  //     // set a timeout to refresh the token a minute before it expires
  //     const expires = new Date(jwtToken.exp * 1000);
  //     const timeout = expires.getTime() - Date.now() - (60 * 1000);
  //     this.refreshTokenTimeout = setTimeout(() => this.refreshToken().subscribe(), timeout);
  // }
}
