import {Button} from "react-bootstrap";
import styled from "styled-components";

export function Score(props) {
    return (
        <ScoreDiv>
            <p className="red">
                Score: {props.domaci}:{props.hoste}
            </p>
            <p>
                <Button onClick={props.increaseDomaci}>Domaci</Button>{" "}
                <Button onClick={props.increaseHoste}>Hoste</Button>
            </p>
        </ScoreDiv>
    );
}

const ScoreDiv = styled.div`
    background: #ccc;
    padding: 1em;
    p {
        margin-top: 1em;
    }
`;
