import { useEffect, useState } from "react";

type AllPokemon = {
    name: string;
    url: string;
  }

interface Props {
    pokemon: AllPokemon[];
    handler: () => void;
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
      pokemon.map((poke, index) => {
      if (pokeList.includes(index)) {
        setGamePokes([...gamePokes, poke])
        console.log(poke)
      }
    })
  },[])


  return(
    <div id="allPokemon">
    {gamePokes.map((poke, index) => {

        return (
            <div key={index} className="pokeCard" onClick={handler}>
              <p>{poke.name}</p>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split("/")[6]}.png`} alt={poke.name} />
            </div>
        )
    })}
    </div>
  )

}
