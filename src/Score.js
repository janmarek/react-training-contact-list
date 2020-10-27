import {Button} from "react-bootstrap";

export function Score(props) {
    return (
        <div>
            Score: {props.domaci}:{props.hoste}
            <p>
                <Button onClick={props.increaseDomaci}>Domaci</Button>{" "}
                <Button onClick={props.increaseHoste}>Hoste</Button>
            </p>
        </div>
    );
}
