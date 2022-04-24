import { PartialMovie, Movie, map } from "./model";

export function create(name: string, price: f32, rating: f32, duration: u32, type: string, stock: u32): Movie {
  return Movie.insert(name, price, rating, duration, type, stock);  
}

export function getById(id: u32): Movie {
  return Movie.findMovieById(id);
}

export function update(id: u32, updates: PartialMovie): Movie {
  return Movie.update(id,updates);
}

export function del(id: u32): void {
  Movie.deleteById(id);
}

export function getAll(offset: u32, limit:u32 = map.length): Movie[]{
  return Movie.findAll(offset, limit);
}

export function buyMovieById(accountId: string, id:u32): String {
   return Movie.buyMovieById(accountId, id);
}

export function seeRentPriceById(id: u32): Movie{
  return Movie.seeRentPrice(id);
}

export function rentMovie(accountId: string, id: u32): String {
  return Movie.rentMovieById(accountId, id);
}
