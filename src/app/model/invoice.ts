import { customer } from './customer';
import { invoiceItem } from './invoiceItem';

export class invoice {
  constructor() {
    this.grandTotal = 0;
    this.netTotal = 0;
    this.totalDiscount = 0;
    this.billDiscount = 0;
    this.lineDiscount = 0;
    this.cashValue = 0;
    this.cardValue = 0;
    this.balanceValue = 0;
    this.bankTransferValue = 0;
    this.creditValue = 0;
    this.customer = new customer();
  }
  number!: string;
  date!: Date;
  grandTotal: number;
  netTotal: number;
  cashValue: number;
  cardValue: number;
  bankTransferValue: number;
  creditValue: number;
  balanceValue: number;
  lineDiscount: number;
  billDiscount: number;
  totalDiscount: number;
  items!: invoiceItem[];
  customer: customer;
  comment!: string;
}
