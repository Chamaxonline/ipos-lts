import { cash } from './cash';
import { User } from './user.model';

export class cashierSignIn {
  constructor() {
    this.user = new User();
  }
  _id!: string;
  user: User;
  signInDate!: Date;
  signOutDate!: Date;
  comment!: string;
  counter!: string;
  status!: number;
  cashflows!: cash[];
}
