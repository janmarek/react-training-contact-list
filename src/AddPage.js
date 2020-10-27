import {Formik, ErrorMessage, Form as FormikForm} from "formik";
import {contactValidation, saveContact} from "./contactModel";
import {Form, Button, Alert} from "react-bootstrap";
import {useState} from "react";
import {useHistory} from "react-router-dom";

const initialValues = {
    name: "",
    phone: "+420 ",
    email: "@",
};

export function AddPage() {
    const [savedSuccessfully, setSavedSucessfully] = useState(false);
    const [savedWithError, setSavedWithError] = useState(false);

    const history = useHistory();

    function submit(values, {resetForm}) {
        setSavedWithError(false);
        setSavedSucessfully(false);

        saveContact(values)
            .then(() => {
                setSavedSucessfully(true);
                resetForm();
                history.push("/");
            })
            .catch(() => {
                setSavedWithError(true);
            });
    }

    return (
        <>
            <h2>Add Contact</h2>
            {savedSuccessfully && <Alert variant="success">Saved</Alert>}
            {savedWithError && <Alert variant="danger">Error save</Alert>}
            <AddForm onSubmit={submit} />
        </>
    );
}

function AddForm({onSubmit}) {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={contactValidation}
        >
            {({getFieldProps}) => (
                <FormikForm>
                    <Form.Group controlId="form-name">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control type="text" {...getFieldProps("name")} />
                        <ErrorMessage name="name" component={ErrorView} />
                    </Form.Group>
                    <Form.Group controlId="phone-name">
                        <Form.Label>Phone:</Form.Label>
                        <Form.Control type="text" {...getFieldProps("phone")} />
                        <ErrorMessage name="phone" component={ErrorView} />
                    </Form.Group>
                    <Form.Group controlId="email-name">
                        <Form.Label>Email:</Form.Label>
                        <Form.Control type="text" {...getFieldProps("email")} />
                        <ErrorMessage name="email" component={ErrorView} />
                    </Form.Group>
                    <p>
                        <Button type="submit">Save</Button>
                    </p>
                </FormikForm>
            )}
        </Formik>
    );
}

const ErrorView = ({children}) => <div className="text-danger">{children}</div>;
