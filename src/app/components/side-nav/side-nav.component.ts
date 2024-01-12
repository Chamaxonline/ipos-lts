import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { RouteConstants } from '../../constants/constants';
import { MenuType } from '../../enums/common-enums';
import { User } from '../../model/user.model';
import { Subscription } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './side-nav.component.html',
  styles: ``,
})
export class SideNavComponent implements OnInit, OnDestroy {
  @Input() title!: string;
  routeConstants = RouteConstants;
  selectedMenu = MenuType.None;
  currentUser?: User | null;
  subscription?: Subscription;
  public showCollapseMenu: boolean = false;

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    // this.getCurrentUser();
  }

  getCurrentUser() {
    this.subscription = this.accountService.currentUser$.subscribe((res) => {
      this.currentUser = res;
    });
  }

  signOut() {
    this.accountService.logout();
  }

  settings() {}

  edit() {}

  menuClickEvent(menu: MenuType) {
    this.selectedMenu = menu;
    switch (menu) {
      case MenuType.None:
        // this.showCollapseMenu=!this.showCollapseMenu;
        // this.router.navigate([RouteConstants.InvoiceRoute])
        this.signOut();
        break;
      case MenuType.Invoice:
        this.router.navigate([RouteConstants.InvoiceRoute]);
        break;
      case MenuType.WholesaleInvoice:
        this.router.navigate([RouteConstants.WholesaleInvoiceRoute]);
        break;
      case MenuType.GRN:
        this.router.navigate([RouteConstants.GRNRoute]);
        break;
      case MenuType.GRNOrder:
        this.router.navigate([RouteConstants.GRNOrderRoute]);
        break;
      case MenuType.CashHandler:
        this.router.navigate([RouteConstants.CashHandlerRoute]);
        break;
      case MenuType.Expenses:
        this.router.navigate([RouteConstants.ExpensesRoute]);
        break;
      case MenuType.StockTaking:
        this.router.navigate([RouteConstants.StockTakingRoute]);
        break;
      case MenuType.ItemMaster:
        this.router.navigate([RouteConstants.ItemMasterRoute]);
        break;
      case MenuType.ItemTypes:
        this.router.navigate([RouteConstants.ItemTypesRoute]);
        break;
      case MenuType.Customer:
        this.router.navigate([RouteConstants.CustomerRoute]);
        break;
      case MenuType.SupplierMaster:
        this.router.navigate([RouteConstants.SupplierMasterRoute]);
        break;
      case MenuType.DailySales:
        this.router.navigate([RouteConstants.DailySalesRoute]);
        break;
      case MenuType.TimeWiseSales:
        this.router.navigate([RouteConstants.TimeWiseSalesRoute]);
        break;
      case MenuType.SalesDetail:
        this.router.navigate([RouteConstants.SalesDetailRoute]);
        break;
      case MenuType.ItemWiseSales:
        this.router.navigate([RouteConstants.ItemWiseSalesRoute]);
        break;
      case MenuType.MonthlySummary:
        this.router.navigate([RouteConstants.MonthlySummaryRoute]);
        break;
      case MenuType.Comments:
        this.router.navigate([RouteConstants.CommentsRoute]);
        break;
      case MenuType.ItemMoving:
        this.router.navigate([RouteConstants.ItemMovingRoute]);
        break;
      default:
        this.router.navigate([RouteConstants.InvoiceRoute]);
        break;
    }
  }

  openNavbar() {
    const navbar = document.getElementById('iposNav')
    if(navbar){
      navbar.classList.add('show')
    }
  }
}
