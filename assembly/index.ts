import { Transaction } from "./model";

export function create(transaction:u32, message:string): Transaction {
  return Transaction.insert(transaction, message);
}
