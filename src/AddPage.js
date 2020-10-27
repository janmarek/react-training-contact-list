import {useState} from "react";

export function AddPage() {
    const [formValues, setFormValues] = useState({
        name: "",
        phone: "+420 ",
        email: "@",
    });

    function handleChange(e) {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value,
        });
    }

    function submit(e) {
        e.preventDefault();
        console.log(formValues);
    }

    const nameValid = formValues.name !== "";
    const phoneValid = formValues.phone !== "";
    const emailValid = formValues.email !== "";
    const formValid = nameValid && phoneValid && emailValid;

    return (
        <>
            <h2>Add Contact</h2>
            <form onSubmit={submit}>
                <div>
                    Name:
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                    {!nameValid && (
                        <div className="text-danger">Name is not valid</div>
                    )}
                </div>
                <div>
                    Phone {formValues.phone}:
                    <br />
                    <input
                        type="text"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                    {!phoneValid && (
                        <div className="text-danger">Phone is not valid</div>
                    )}
                </div>
                <div>
                    Email:
                    <br />
                    <input
                        type="text"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                    {!emailValid && (
                        <div className="text-danger">Email is not valid</div>
                    )}
                </div>
                <p>
                    <button type="submit" disabled={!formValid}>
                        Save
                    </button>
                </p>
            </form>
        </>
    );
}
