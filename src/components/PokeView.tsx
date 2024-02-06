
type AllPokemon = {
    name: string;
    url: string;
  }

interface Props {
    pokemon: AllPokemon[];
    handler: (poke: AllPokemon) => void;
    counter: number;
    highscore: number
}


export default function PokeView({pokemon, handler, counter, highscore}: Props)  {

  return(
    <>
      <div id="header">
        <h1 id="title">Pokemon Memory Game</h1>
        <span id="counter">Current: {counter}</span>
        <span id="highscore">Highscore: {highscore}</span>
      </div>
      <div id="allPokemon">
      {pokemon.map((poke, index) => {

          return (
              <div key={index} className="pokeCard" onClick={() => handler(poke)}>
                <p>{poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}</p>
                <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.url.split("/")[6]}.png`} alt={poke.name} />
              </div>
          )
      })}
      </div>
    </>
  )

}
