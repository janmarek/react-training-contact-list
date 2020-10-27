export function Score(props) {
    return (
        <div>
            Score: {props.domaci}:{props.hoste}
            <p>
                <button onClick={props.increaseDomaci}>Domaci</button>
                <button onClick={props.increaseHoste}>Hoste</button>
            </p>
        </div>
    );
}
