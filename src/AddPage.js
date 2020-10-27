import {Formik, ErrorMessage} from "formik";

const initialValues = {
    name: "",
    phone: "+420 ",
    email: "@",
};

function validate(values) {
    const errors = {};

    const nameValid = values.name !== "";
    const phoneValid = values.phone !== "";
    const emailValid = values.email !== "";

    if (!nameValid) {
        errors.name = "Name is not valid";
    }

    if (!phoneValid) {
        errors.phone = "Phone is not valid";
    }
    if (!emailValid) {
        errors.email = "Email is not valid";
    }

    return errors;
}

export function AddPage() {
    function submit(values) {
        console.log(values);
    }

    return (
        <>
            <h2>Add Contact</h2>
            <Formik
                onSubmit={submit}
                initialValues={initialValues}
                validate={validate}
            >
                {({
                    handleSubmit,
                    handleChange,
                    handleBlur,
                    values,
                    errors,
                    touched,
                }) => {
                    function handlePhoneChange(e) {
                        const value = e.target.value;
                        if (value.match(/^\+420 /)) {
                            handleChange(e);
                        }
                    }

                    return (
                        <form onSubmit={handleSubmit}>
                            <div>
                                Name:
                                <br />
                                <input
                                    type="text"
                                    name="name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name && (
                                    <div className="text-danger">
                                        {errors.name}
                                    </div>
                                )}
                            </div>
                            <div>
                                Phone {values.phone}:
                                <br />
                                <input
                                    type="text"
                                    name="phone"
                                    value={values.phone}
                                    onChange={handlePhoneChange}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage
                                    name="phone"
                                    render={(err) => (
                                        <div className="text-danger">{err}</div>
                                    )}
                                />
                            </div>
                            <div>
                                Email:
                                <br />
                                <input
                                    type="text"
                                    name="email"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                <ErrorMessage
                                    name="email"
                                    component={ErrorView}
                                />
                                <ErrorView>
                                    dgsdfgdf <strong>sdfdsf</strong>
                                </ErrorView>
                            </div>
                            <p>
                                <button type="submit">Save</button>
                            </p>
                        </form>
                    );
                }}
            </Formik>
        </>
    );
}

const ErrorView = ({children}) => <div className="text-danger">{children}</div>;
