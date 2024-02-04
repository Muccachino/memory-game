import { useEffect, useState } from "react";
import PokeView from "./PokeView";


export default function PokeData() {
    const [pokeName, setPokeName] = useState<string[]>([]);
    const [pokeURL, setPokeURL] = useState<string[]>([]);

    useEffect(() => {

        const fetchAllData = async () => {
          try {
            const pokeList: string[] = ["3", "6", "9", "25", "59", "65", "94", "130", "149", "150"];
            
            for (const num of pokeList) {
              const url = `https://pokeapi.co/api/v2/pokemon-form/${num}/`;
              const response = await fetch(url);
              const pokeData = await response.json();
              setPokeName(prevPokeNames => [...prevPokeNames, pokeData.name]);
              setPokeURL(prevPokeURLs => [...prevPokeURLs, pokeData.sprites.front_default]);
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };

        fetchAllData();
 
      }, []);





    return <PokeView names={pokeName} urls={pokeURL} />
}
