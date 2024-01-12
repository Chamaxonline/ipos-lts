import { Routes } from '@angular/router';
import { RouteConstants } from './constants/constants';
import { SupplierComponent } from './components/supplier/supplier.component';
import { CustomerComponent } from './components/customer/customer.component';

export const routes: Routes = [
  {
    path: RouteConstants.SupplierMasterRoute,
    component: SupplierComponent,
    title: 'Supplier',
  },
  {
    path: RouteConstants.CustomerRoute,
    component: CustomerComponent,
    title: 'Customer',
  },
];
