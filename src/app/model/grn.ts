import { grnItem } from './grnItem';
import { supplier } from './supplier';

export class grn {
  constructor() {
    this.grandTotal = 0;
    this.supplier = new supplier();
  }
  supplier: supplier;
  number!: string;
  date!: Date;
  grandTotal: number;
  isProcessed!: boolean;
  comment!: string;
  items!: grnItem[];
}
