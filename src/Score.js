import {Button} from "react-bootstrap";
import "./Score.scss";

export function Score(props) {
    return (
        <div className="score">
            Score: {props.domaci}:{props.hoste}
            <p>
                <Button onClick={props.increaseDomaci}>Domaci</Button>{" "}
                <Button onClick={props.increaseHoste}>Hoste</Button>
            </p>
        </div>
    );
}
