import {Button} from "react-bootstrap";
import styled from "styled-components";
import {Card} from "react-bootstrap";

export function Score(props) {
    return (
        <ScoreCard>
            <Card.Body>
                <ScoreTitle>
                    Score: {props.domaci}:{props.hoste}
                </ScoreTitle>
                <p>
                    <Button onClick={props.increaseDomaci}>Domaci</Button>{" "}
                    <Button onClick={props.increaseHoste}>Hoste</Button>
                </p>
            </Card.Body>
        </ScoreCard>
    );
}

const ScoreCard = styled(Card)`
    background: #ccc;
`;

const ScoreTitle = styled(Card.Title)`
    color: blue;
`;
