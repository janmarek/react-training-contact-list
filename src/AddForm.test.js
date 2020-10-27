import {render, cleanup, fireEvent, waitFor} from "@testing-library/react";
import {AddForm} from "./AddPage";

afterEach(cleanup);

test("init state", () => {
    const {getByText} = render(<AddForm onSubmit={() => {}} />);
    getByText(/name/i);
    getByText(/Phone/);
    getByText(/Save/);
});

test("validation", async () => {
    const onSubmit = jest.fn();
    const {getByText, findByText} = render(<AddForm onSubmit={onSubmit} />);
    fireEvent.click(getByText(/save/i));

    await findByText("name is a required field");
    getByText("email must be a valid email");
    expect(onSubmit).not.toHaveBeenCalled();
});

test("validation ok", async () => {
    const onSubmit = jest.fn();
    const {getByText, getByLabelText} = render(<AddForm onSubmit={onSubmit} />);

    fireEvent.change(getByLabelText(/name/i), {
        target: {value: "name"},
    });
    fireEvent.change(getByLabelText(/phone/i), {
        target: {value: "123456"},
    });
    fireEvent.change(getByLabelText(/email/i), {
        target: {value: "test@test.cz"},
    });
    fireEvent.click(getByText(/save/i));

    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });
});
