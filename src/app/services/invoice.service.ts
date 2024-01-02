import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { invoice } from '../model/invoice';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  save(invoice: invoice) {
    return this.post<invoice>(`/api/invoice`, invoice);
  }
}
