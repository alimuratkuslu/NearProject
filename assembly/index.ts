import { PartialTransaction, Transaction } from "./model";

export function create(transaction:u32, message:string): Transaction {
  return Transaction.insert(transaction, message);  
}

export function getById(id: u32): Transaction {
  return Transaction.findTxById(id);
}

export function update(id: u32, updates: PartialTransaction): Transaction {
  return Transaction.update(id,updates);
}

export function del(id: u32): void {
  Transaction.deleteById(id);
}
