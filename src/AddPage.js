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

    return (
        <>
            <h2>Add Contact</h2>
            <form onSubmit={submit}>
                <p>
                    Name:
                    <br />
                    <input
                        type="text"
                        name="name"
                        value={formValues.name}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    Phone {formValues.phone}:
                    <br />
                    <input
                        type="text"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    Email:
                    <br />
                    <input
                        type="text"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                    />
                </p>
                <p>
                    <button type="submit">Save</button>
                </p>
            </form>
        </>
    );
}
