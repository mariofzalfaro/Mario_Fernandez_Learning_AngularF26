export interface Pokemon {
  name:string;
  pokedexNumber:number;
  type:'Fire'| 'Water' | 'Grass' | 'Electric'| 'Ghost' | 'Normal' | 'Poison' | 'Ground' | 'Rock';
  generation:number;
  megaEvolution?:boolean;
}
