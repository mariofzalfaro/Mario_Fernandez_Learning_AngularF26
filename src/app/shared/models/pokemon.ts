export interface Pokemon {
  name:string;
  pokedexNumber:number;
  type:'Fire'| 'Water' | 'Grass' | 'Electric'| 'Ghost' | 'Normal' | 'Poison' | 'Psychic' |
    'Ground' | 'Rock' | 'Dragon' | 'Flying' | 'Bug' | 'Dark' | 'Fighting' | 'Steel' | 'Fairy' | 'Ice';
  generation:string;
  megaEvolution?:boolean;
}

