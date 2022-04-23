import{PersistentUnorderedMap,context, logging, math, storage, u128, ContractPromiseBatch} from "near-sdk-as";

export const map = new PersistentUnorderedMap<u32, Movie>("map");

@nearBindgen
export class PartialMovie {
    name: string;
    price: f32;
    rating: f32;
    duration: u32;
    type: string;
    stock: u32;
}

@nearBindgen
export class Movie {

    id: u32;
    name: string;
    price: f32;
    rating: f32;
    duration: u32;
    type: string;
    stock:u32;

    constructor(name: string, price: f32, rating: f32, duration: u32, type: string, stock:u32){
        this.id = math.hash32<string>(name);
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.duration = duration;
        this.type = type;
        this.stock = stock;
    }

    static insert(name: string, price: f32, rating: f32, duration: u32, type: string, stock: u32): Movie{
        const movie = new Movie(name,price,rating, duration, type,stock);
        
        map.set(movie.id, movie);

        return movie;
    }

    static findAll(offset: u32, limit: u32): Movie[] {
        return map.values(offset, offset + limit);
    }

    static findMovieById(id: u32): Movie {
        return map.getSome(id);
    }

    static update(id: u32, partial: PartialMovie):Movie {
        const movie = this.findMovieById(id);

        movie.name = partial.name;
        movie.price = partial.price;
        movie.rating = partial.rating;
        movie.duration = partial.duration;
        movie.type = partial.type;
        movie.stock = partial.stock;

        map.set(id,movie);

        return movie;
    }

    static deleteById(id:u32): void {
        map.delete(id);
    }

    static buyMovieById(accountId:string, id:u32): String {
        const movie = this.findMovieById(id);
        let cur_Sender = context.sender;
        let amount = context.attachedDeposit;

        logging.log("Sender: " + cur_Sender);
        logging.log("Attached Amount: " + (amount).toString());

        const to_beneficiary = ContractPromiseBatch.create(accountId);
        const amount_to_receive = amount;
        const bal = context.accountBalance;

        to_beneficiary.transfer(amount_to_receive);

        /*if(movie.stock==0){
            map.delete(id);
        }
        else{
            movie.stock = movie.stock - 1;
        }*/

        if(amount > bal){
            return "You do not have enough balance"
        }
        return "You have bought the movie " + movie.name + " successfully";
    }

    static rentMovieById(id:u32): Movie {
        const movie = this.findMovieById(id);
        movie.price = movie.price * 0.25;

        return movie;
        
    }
}