


interface Props {
    name: string;
    url: string
}

export default function PokeView({name, url}: Props) {
    return(
        <>
            <div className="item">
                <p>{name}</p>
                <img src={url} alt={name} />
            </div>
        </>
    )
}