export class expence {
  constructor() {
    this.type = new expencesType();
    this.value = 0;
    this.date = new Date();
  }
  type: expencesType;
  description!: string;
  value: number;
  date: Date;
}

export class expencesType {
  _id!: string;
  name!: string;
}
