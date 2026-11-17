export interface Pokemon {
  name:string;
  id:number;
  // types: { type: { name: string } }[];
  /*generation:string;
  megaEvolution?:boolean;*/
}

export interface PokemonListResponse {
  results: { name: string; url: string }[];
}

