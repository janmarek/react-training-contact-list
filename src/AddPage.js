import {Formik, ErrorMessage, Form as FormikForm} from "formik";
import * as yup from "yup";
import {Form, Button} from "react-bootstrap";

const initialValues = {
    name: "",
    phone: "+420 ",
    email: "@",
};

const validation = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required("Neni vyplneno"),
    email: yup.string().required().email(),
});

export function AddPage() {
    function submit(values) {
        console.log(values);
    }

    return (
        <>
            <h2>Add Contact</h2>
            <AddForm onSubmit={submit} />
        </>
    );
}

function AddForm({onSubmit}) {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={validation}
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
