import{PersistentUnorderedMap, math} from "near-sdk-as";

export const map = new PersistentUnorderedMap<u32, Transaction>("map");

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

    static insert(transaction: u32, message: string){
        const tx = new Transaction(transaction, message);

        map.set(tx.id, tx);

        return tx;
    }
}