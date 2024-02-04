

interface Props {
    names: string[];
    urls: string[];
}

export default function PokeView({names, urls}: Props) {
        return(
            <>
            {names.map((pokeName, index) => {
                if(index % 2 !== 0) {
                    return(
                        <div key={index} className="pokeName">
                        <p>{pokeName}</p>
                        <img src={urls[index]} alt={pokeName} />
                    </div>
                    )
                }
       
            })}

            </>
        )
    }