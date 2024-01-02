import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { supplier } from '../model/supplier';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class SupplierService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  all() {
    return this.get<supplier[]>(`/api/suppliers`);
  }

  save(supplier: supplier) {
    return this.post<supplier>(`/api/supplier`, supplier);
  }
}
