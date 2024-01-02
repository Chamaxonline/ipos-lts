import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from } from 'rxjs';
import { grn } from '../model/grn';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class GrnService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  save(grn: grn) {
    return this.post<grn>(`/api/grn`, grn);
  }

  process(grn: grn) {
    return this.post<grn>(`/api/processGrn`, grn);
  }

  search(fromDate: Date, toDate: Date) {
    return this.get<grn[]>(`/api/grns?fromDate=${fromDate}&toDate=${toDate}`);
  }
}
