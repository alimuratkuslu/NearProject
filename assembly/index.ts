import { PartialMovie, Movie, map } from "./model";

export function create(name: string, price: f32, rating: f32, duration: u32, type: string): Movie {
  return Movie.insert(name, price, rating, duration, type);  
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
