import{PersistentUnorderedMap, math} from "near-sdk-as";

export const map = new PersistentUnorderedMap<u32, Movie>("map");

@nearBindgen
export class PartialMovie {
    name: string;
    price: f32;
    rating: f32;
    duration: u32;
    type: string;
}

@nearBindgen
export class Movie {

    id: u32;
    name: string;
    price: f32;
    rating: f32;
    duration: u32;
    type: string;

    constructor(name: string, price: f32, rating: f32, duration: u32, type: string){
        this.id = math.hash32<string>(name);
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.duration = duration;
        this.type = type;
    }

    static insert(name: string, price: f32, rating: f32, duration: u32, type: string): Movie{
        const movie = new Movie(name,price,rating, duration, type);
        
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

        map.set(id,movie);

        return movie;
    }

    static deleteById(id:u32): void {
        map.delete(id);
    }
}