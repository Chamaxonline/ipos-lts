export class invoiceItem {
  constructor() {
    this.price = 0;
    this.qty = 0;
    this.discount = 0;
    this.discountValue = 0;
    this.unitSize = 1;
  }
  lineNumber!: number;
  itemCode!: string;
  itemDescription!: string;
  price: number;
  qty: number;
  discount: number;
  discountValue: number;
  cost!: number;
  maxDiscountValue!: number;
  stockItemCode!: string;
  unitSize: number;
  get subTotal() {
    return (
      (this.price * ((100 - this.discount) / 100) - this.discountValue) *
      this.qty
    );
  }
  get totalDiscount() {
    return this.price * this.qty - this.subTotal;
  }
}
