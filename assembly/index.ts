import { PartialMovie, Movie } from "./model";

export function create(name: string, price: f32, rating: f32, duration: u32, description: string): Movie {
  return Movie.insert(name, price, rating, duration, description);  
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
