import {
    Formik,
    ErrorMessage,
    Form as FormikForm,
    useFormikContext,
    FieldArray,
} from "formik";
import * as yup from "yup";
import {Form, Button} from "react-bootstrap";

const emptyContact = {
    name: "",
    phone: "+420 ",
    email: "@",
};
const initialValues = {
    contacts: [emptyContact],
};

const emailValidation = yup.string().required().email();

const contactValidation = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required("Neni vyplneno"),
    email: emailValidation,
});

const formValidation = yup.object().shape({
    contacts: yup.array().of(contactValidation),
});

export function AddPage() {
    function submit(values) {
        console.log(values);
    }

    // const props = {name: "name", onChange: () => {}, value: "xxx"};
    // <input type="text" {...props} />

    return (
        <>
            <h2>Add Contact</h2>
            <AddForm onSubmit={submit} />
        </>
    );
}

function EmailForm({namePrefix}) {
    const {getFieldProps} = useFormikContext();

    return (
        <Form.Group controlId={namePrefix + "email-name"}>
            <Form.Label>Email:</Form.Label>
            <Form.Control
                type="text"
                {...getFieldProps(namePrefix + "email")}
            />
            <ErrorMessage name={namePrefix + "email"} component={ErrorView} />
        </Form.Group>
    );
}

function AddForm({onSubmit}) {
    return (
        <Formik
            onSubmit={onSubmit}
            initialValues={initialValues}
            validationSchema={formValidation}
        >
            {({getFieldProps, values, errors}) => (
                <FormikForm>
                    <p>{JSON.stringify(values)}</p>
                    <p>{JSON.stringify(errors)}</p>
                    <FieldArray name="contacts">
                        {({push}) => (
                            <>
                                {values.contacts.map((contact, index) => (
                                    <div key={index}>
                                        <h3>Contact {index + 1}</h3>
                                        <Form.Group
                                            controlId={`contacts[${index}].name`}
                                        >
                                            <Form.Label>Name:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                {...getFieldProps(
                                                    `contacts[${index}].name`
                                                )}
                                            />
                                            <ErrorMessage
                                                name={`contacts[${index}].name`}
                                                component={ErrorView}
                                            />
                                        </Form.Group>
                                        <Form.Group
                                            controlId={`contacts[${index}].phone`}
                                        >
                                            <Form.Label>Phone:</Form.Label>
                                            <Form.Control
                                                type="text"
                                                {...getFieldProps(
                                                    `contacts[${index}].phone`
                                                )}
                                            />
                                            <ErrorMessage
                                                name={`contacts[${index}].phone`}
                                                component={ErrorView}
                                            />
                                        </Form.Group>
                                        <EmailForm
                                            namePrefix={`contacts[${index}]`}
                                        />
                                    </div>
                                ))}

                                <p>
                                    <Button onClick={() => push(emptyContact)}>
                                        Add
                                    </Button>
                                </p>
                            </>
                        )}
                    </FieldArray>
                    <p>
                        <Button type="submit">Save</Button>
                    </p>
                </FormikForm>
            )}
        </Formik>
    );
}

const ErrorView = ({children}) => <div className="text-danger">{children}</div>;
