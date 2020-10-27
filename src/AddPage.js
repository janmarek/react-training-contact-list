import {Formik, ErrorMessage, Form, Field} from "formik";

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
                {() => (
                    <Form>
                        <div>
                            Name:
                            <br />
                            <Field type="text" name="name" />
                            <ErrorMessage name="name" component={ErrorView} />
                        </div>
                        <div>
                            Phone:
                            <br />
                            <Field type="text" name="phone" />
                            <ErrorMessage name="phone" component={ErrorView} />
                        </div>
                        <div>
                            Email:
                            <br />
                            <Field type="text" name="email" />
                            <ErrorMessage name="email" component={ErrorView} />
                        </div>
                        <p>
                            <button type="submit">Save</button>
                        </p>
                    </Form>
                )}
            </Formik>
        </>
    );
}

const ErrorView = ({children}) => <div className="text-danger">{children}</div>;
