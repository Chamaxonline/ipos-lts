import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { invoice } from '../model/invoice';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class ReportService extends BaseService {
  constructor(http: HttpClient) {
    super(http);
  }

  salesDetails(fromDate: Date, toDate: Date, customerId: undefined) {
    return this.get<invoice[]>(
      `/api/reports/salesDetail?fromDate=${fromDate}&toDate=${toDate}&customerId=${customerId}`
    );
  }

  dailySales(fromDate: Date, toDate: Date) {
    return this.get<any[]>(
      `/api/reports/dailySales?fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  monthlySales(fromDate: Date, toDate: Date) {
    return this.get<any[]>(
      `/api/reports/monthlySales?fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  timeWiseSales(fromDate: Date, toDate: Date, groupBy: string) {
    return this.get<any[]>(
      `/api/reports/timeWiseSales?fromDate=${fromDate}&toDate=${toDate}&groupBy=${groupBy}`
    );
  }

  itemWiseSales(fromDate: Date, toDate: Date) {
    return this.get<any[]>(
      `/api/reports/itemWiseSalse?fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  itemMoving(fromDate: Date, toDate: Date) {
    return this.get<any[]>(
      `/api/reports/itemMoving?fromDate=${fromDate}&toDate=${toDate}`
    );
  }
}
