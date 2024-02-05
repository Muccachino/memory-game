
interface Props {
    counter: number;
    highscore: number;
}

export default function Header({counter, highscore}: Props) {
    return (
        <div id="header">
            <h1>Pokemon Memory Game</h1>
            <span id="counter">Current: {counter}</span>
            <span id="highscore">Highscore: {highscore}</span>
        </div>
    )
}