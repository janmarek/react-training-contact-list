import {Formik, ErrorMessage, Form, Field} from "formik";
import * as yup from "yup";

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
            <Formik
                onSubmit={submit}
                initialValues={initialValues}
                validationSchema={validation}
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
