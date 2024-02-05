import { useEffect, useState } from "react";
import PokeView from "./PokeView";

type AllPokemon = {
  name: string;
  url: string;
}


export default function PokeData() {
    const [pokemons, setPokemons] = useState<AllPokemon[]>([]);

    useEffect(() => {
      
        const fetchAllData = async () => {
          try {
            
            const url = `https://pokeapi.co/api/v2/pokemon-form/?limit=151`;
            const response = await fetch(url);
            const pokeData = await response.json();
            setPokemons([...pokeData.results])
            console.log(pokemons)
 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchAllData();
 
      }, []); 

    
    return <PokeView pokemon={pokemons} />
}
