import {Formik} from "formik";

const initialValues = {
    name: "",
    phone: "+420 ",
    email: "@",
};

export function AddPage() {
    function submit(values) {
        console.log(values);
    }

    // const nameValid = formValues.name !== "";
    // const phoneValid = formValues.phone !== "";
    // const emailValid = formValues.email !== "";
    // const formValid = nameValid && phoneValid && emailValid;

    return (
        <>
            <h2>Add Contact</h2>
            <Formik onSubmit={submit} initialValues={initialValues}>
                {({handleSubmit, handleChange, values}) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            Name:
                            <br />
                            <input
                                type="text"
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                            />
                            {/* {!nameValid && (
                                <div className="text-danger">
                                    Name is not valid
                                </div>
                            )} */}
                        </div>
                        <div>
                            Phone {values.phone}:
                            <br />
                            <input
                                type="text"
                                name="phone"
                                value={values.phone}
                                onChange={handleChange}
                            />
                            {/* {!phoneValid && (
                                <div className="text-danger">
                                    Phone is not valid
                                </div>
                            )} */}
                        </div>
                        <div>
                            Email:
                            <br />
                            <input
                                type="text"
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                            />
                            {/* {!emailValid && (
                                <div className="text-danger">
                                    Email is not valid
                                </div>
                            )} */}
                        </div>
                        <p>
                            <button type="submit">Save</button>
                        </p>
                    </form>
                )}
            </Formik>
        </>
    );
}
