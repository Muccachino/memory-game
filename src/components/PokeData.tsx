import { useEffect, useState } from "react";
import PokeView from "./PokeView";


export default function PokeData() {
    const [pokeName, setPokeName] = useState("");
    const [pokeURL, setPokeURL] = useState("");

    useEffect(() => {
        const connect = async () => {
            try {
                const data = await fetch("https://pokeapi.co/api/v2/pokemon-form/35/");
                if (!data.ok) {
                    throw new Error("Sorry, we couldn't connect to our server!");
                }
                const fetchedData = await data.json();
                  console.log(fetchedData)
                  setPokeName(fetchedData.pokemon.name);
                  setPokeURL(fetchedData.sprites.front_default);
    
            } catch (error) {
                console.log(error);
            }
        };
        connect();
    }, [])


    return <PokeView name={pokeName} url={pokeURL} />
}
