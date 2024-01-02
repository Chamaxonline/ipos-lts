export class customer {
  constructor() {
    this.totalBillValue = 0;
  }
  _id!: string;
  phoneNumber!: string;
  whatsappNumber!: string;
  title!: string;
  name!: string;
  address!: string;
  email!: string;
  comment!: string;
  totalBillValue: number;
  totalOutstanding!: number;
  isAllowedPrintName!: boolean;
}
