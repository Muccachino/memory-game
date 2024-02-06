import { useEffect, useState } from "react";
import PokeView from "./PokeView";

type AllPokemon = {
  name: string;
  url: string;
}



const randomList = (num: number) => {
  const list: number[] = []
  while (list.length !== num) {
    const randomNum = Math.floor(Math.random() * 150)
    if(!(list.includes(randomNum))) {
      list.push(randomNum);
    }
  }
  return list;
}

export default function PokeData() {

    const [pokemons, setPokemons] = useState<AllPokemon[]>([]);
    const [gamePokes, setGamePokes] = useState<AllPokemon[]>([])
    const pokeList = randomList(12);

    const [currentPokes, setCurrentPokes] = useState<AllPokemon[]>([]);
    const [counter, setCounter] = useState<number>(0);
    const [highscore, setHighscore] = useState<number>(0);
    
    const counterHandler = (poke: AllPokemon) => {
      if (!(currentPokes.includes(poke))) {
        setCurrentPokes([...currentPokes, poke]);
        setCounter(counter + 1);        
      } else {
        setCurrentPokes([]);
        if(counter > highscore) {
          setHighscore(counter);
        }
        setCounter(0);
      }
    }


    const clickHandler = (poke: AllPokemon) => {
      counterHandler(poke)
      const tempArray = [...gamePokes];
      for (let i = tempArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const tempElement = tempArray[i];
        tempArray[i] = tempArray[j];
        tempArray[j] = tempElement;
      }
      setGamePokes(tempArray)
    }

    useEffect(() => {
      
        const fetchAllData = async () => {
          try {
            
            const url = `https://pokeapi.co/api/v2/pokemon-form/?limit=151`;
            const response = await fetch(url);
            const pokeData = await response.json();
            setPokemons([...pokeData.results])
 
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
        fetchAllData();
 
      }, []); 

      useEffect(() => {
        const filteredPokemon: AllPokemon[] = []
          pokemons.map((poke, index) => {
          if (pokeList.includes(index)) {
            filteredPokemon.push(poke)
          }
          setGamePokes(filteredPokemon)
        })
      },[pokemons])

    
    return <PokeView pokemon={gamePokes} handler={clickHandler} counter={counter} highscore={highscore}/>
}
