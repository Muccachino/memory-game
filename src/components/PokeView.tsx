
type AllPokemon = {
    name: string;
    url: string;
  }

interface Props {
    pokemon: AllPokemon[];
    //handler: () => void;
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


export default function PokeView({pokemon}: Props)  {
  const pokeList = randomList(12);

  return(
    <>
    {pokemon.map((poke, index) => {
      if(pokeList.includes(index)) {
        return (
            <div key={index} className="pokeCard">
              <p>{poke.name}</p>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split("/")[6]}.png`} alt={poke.name} />
            </div>
        )
      }
    })}
    </>
  )

}
