import {Button} from "react-bootstrap";
import styled from "styled-components";
import {Card} from "react-bootstrap";

export function Score(props) {
    return (
        <Score.Card>
            <Card.Body>
                <Score.Title>
                    Score: {props.domaci}:{props.hoste}
                </Score.Title>
                <p>
                    <Button onClick={props.increaseDomaci}>Domaci</Button>{" "}
                    <Button onClick={props.increaseHoste}>Hoste</Button>
                </p>
            </Card.Body>
        </Score.Card>
    );
}

Score.Card = styled(Card)`
    background: #ccc;
`;

Score.Title = styled(Card.Title)`
    color: var(--purple);
`;
