import {render, cleanup} from "@testing-library/react";
import {Score} from "./Score";

afterEach(cleanup);

test("can show score", () => {
    const {getByText} = render(
        <Score
            domaci={0}
            hoste={2}
            increaseDomaci={() => {}}
            increaseHoste={() => {}}
        />
    );
    getByText(/0:2/);
});
