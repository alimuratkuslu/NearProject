import{PersistentUnorderedMap, math} from "near-sdk-as";

export const map = new PersistentUnorderedMap<u32, Transaction>("map");

@nearBindgen
export class PartialTransaction {
    transaction: u32;
    message: string;
    done: bool;
}

@nearBindgen
export class Transaction {

    id: u32;
    transaction: u32;
    message: string;
    done: bool;

    constructor(transaction: u32, message: string){
        this.id = math.hash32<string>(message);
        this.message = message;
        this.transaction = transaction;
        this.done = false;
    }

    static insert(transaction: u32, message: string): Transaction{
        const tx = new Transaction(transaction, message);

        map.set(tx.id, tx);

        return tx;
    }

    static findTxById(id: u32): Transaction {
        return map.getSome(id);
    }

    static update(id: u32, partial: PartialTransaction):Transaction {
        const tx = this.findTxById(id);

        tx.transaction = partial.transaction;
        tx.message = partial.message;
        tx.done = partial.done;

        map.set(id,tx);

        return tx;
    }
}