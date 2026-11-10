export interface PokemonApiDetail {
  id: number;
  name: string;
  types: { type: { name: string } }[];
}

export interface PokemonApiListResponse {
  results: { name: string; url: string }[];
}
