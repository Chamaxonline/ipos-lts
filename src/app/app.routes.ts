import { Routes } from '@angular/router';
import { RouteConstants } from './constants/constants';
import { SupplierComponent } from './components/supplier/supplier.component';

export const routes: Routes = [
  { path: RouteConstants.SupplierMasterRoute, component: SupplierComponent },
];
