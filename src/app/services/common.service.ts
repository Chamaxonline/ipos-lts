import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { cash } from '../model/cash';
import { customer } from '../model/customer';
import { stn } from '../model/stn';
import { BaseService } from './base.service';
import { expence, expencesType } from '../model/expenceNote';
import { comment } from '../model/comment';
import { cashierSignIn } from '../model/cashierSignIn';

@Injectable({
  providedIn: 'root',
})
export class CommonService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  saveCash(cash: cash) {
    return this.post<cash>(`/api/cash`, cash);
  }

  signInCashier(signIn: cashierSignIn) {
    return this.post<cashierSignIn>(`/api/cashiersignInOut`, signIn);
  }

  cashFlowByDate(date: Date): Observable<cash[]> {
    return this.get<cash[]>(`/api/cashes?date=${date}`).pipe(
      map((data) =>
        data.map(function (value) {
          let newCash = new cash();
          newCash.type = value.type;
          newCash.comment = value.comment;
          newCash.fiveThousand = value.fiveThousand;
          newCash.oneThousand = value.oneThousand;
          newCash.fiveHundred = value.fiveHundred;
          newCash.oneHundred = value.oneHundred;
          newCash.fifty = value.fifty;
          newCash.twenty = value.twenty;
          newCash.ten = value.ten;
          newCash.five = value.five;
          newCash.two = value.two;
          newCash.one = value.one;
          return newCash;
        })
      )
    );
  }

  saveCustomer(customer: customer) {
    return this.post<cash>(`/api/customer`, customer);
  }

  customer(id: string) {
    return this.get<customer>(`/api/customer?id=${id}`);
  }

  customers(searchText: string | undefined) {
    return this.get<customer[]>(`/api/customers?searchText=${searchText}`);
  }

  saveStn(stn: stn) {
    return this.post<stn>(`/api/stn`, stn);
  }

  processStn(stn: stn) {
    return this.post<stn>(`/api/processStn`, stn);
  }

  searchStn(fromDate: Date, toDate: Date) {
    return this.get<stn[]>(`/api/stns?fromDate=${fromDate}&toDate=${toDate}`);
  }

  saveExpenceType(expencesType: expencesType) {
    return this.post<expencesType>(`/api/expenceType`, expencesType);
  }

  expenceTypes() {
    return this.get<expencesType[]>(`/api/expenceTypes`);
  }

  saveExpence(expencesType: expence) {
    return this.post<expence>(`/api/expence`, expencesType);
  }

  expences(fromDate: Date, toDate: Date, typeId: string | undefined) {
    return this.get<expence[]>(
      `/api/expences?fromDate=${fromDate}&toDate=${toDate}&type=${typeId}`
    );
  }

  saveComment(comment: comment) {
    return this.post<comment>(`/api/comment`, comment);
  }

  comments(fromDate: Date, toDate: Date, typeId: string | undefined) {
    return this.get<expence[]>(
      `/api/comments?fromDate=${fromDate}&toDate=${toDate}&type=${typeId}`
    );
  }
}
