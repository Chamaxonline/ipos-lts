import { item } from './item';

export class grnItem extends item {
  constructor() {
    super();
    this.cost = 0;
    this.qty = 0;
    this.lineNumber = 1;
  }
  override qty: number;
  availableQty!: number;
  lineNumber: number;
  get subTotal() {
    return this.cost * this.qty;
  }
}
