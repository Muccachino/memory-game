import { useEffect, useState } from "react";

type AllPokemon = {
    name: string;
    url: string;
  }

interface Props {
    pokemon: AllPokemon[];
    handler: (pokes: AllPokemon[]) => void;
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


export default function PokeView({pokemon, handler}: Props)  {
  const [gamePokes, setGamePokes] = useState<AllPokemon[]>([])
  const pokeList = randomList(12);

  useEffect(() => {
    const filteredPokemon: AllPokemon[] = []
      pokemon.map((poke, index) => {
      if (pokeList.includes(index)) {
        filteredPokemon.push(poke)
      }
      setGamePokes(filteredPokemon)
    })
  },[pokemon])


  return(
    <div id="allPokemon">
    {gamePokes.map((poke, index) => {

        return (
            <div key={index} className="pokeCard" onClick={() => handler(gamePokes)}>
              <p>{poke.name}</p>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split("/")[6]}.png`} alt={poke.name} />
            </div>
        )
    })}
    </div>
  )

}
