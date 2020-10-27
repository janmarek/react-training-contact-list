Školení
- https://github.com/janmarek/react-contact-list - hotová aplikace
- https://github.com/janmarek/example-backend
- https://github.com/janmarek/example-backend/blob/master/server.js
- https://github.com/janmarek/react-training-contact-list

Create React App https://create-react-app.dev

React https://reactjs.org/docs/getting-started.html
- JSX https://reactjs.org/docs/introducing-jsx.html
- Hooks https://reactjs.org/docs/hooks-reference.html

Komponenty
- props
- kompozice
- funkce + hooks, třídy
- state, props
- samo se překresluje
- fragment

Stylování
- node-sass
- styled-components https://styled-components.com
- import css

React Bootstrap https://react-bootstrap.github.io

Hooks
- useState
- useEffect
- custom hooks
- knihovny

React Context
- useContext

Formuláře
- controlled components
- https://reactjs.org/docs/forms.html
- Formik https://formik.org/docs/overview
- yup https://github.com/jquense/yup

Architektura
- Lifting state up https://reactjs.org/docs/lifting-state-up.html
- odvozená data nedávat do state
- chytré, hloupé (container, view)
- useReducer
- složky per feature

React Router
- https://reactrouter.com/web/guides/quick-start

Axios
- https://github.com/axios/axios
- promise
- async await

Typescript
- https://www.typescriptlang.org
- https://create-react-app.dev/docs/adding-typescript

StoryBook
- npx sb init
- https://storybook.js.org/docs/react/get-started/introduction
- 6.1.0-alpha.30

React Intl
- https://formatjs.io/docs/react-intl/
- <IntlProvider locale messages />
- <FormattedMessage id=""/>

React Testing Library
- https://testing-library.com/docs/react-testing-library/cheatsheet

```
import {render, fireEvent, waitFor, cleanup} from "@testing-library/react";
import {AddContactForm} from "./AddContactPage";

afterEach(cleanup);

test("Validation", async () => {
    const onSubmit = jest.fn();
    const {getByText, findByText} = render(
        <AddContactForm onSubmit={onSubmit} />
    );

    fireEvent.click(getByText(/save/i));

    await findByText("name is a required field");
    getByText("phone is a required field");
    getByText("email is a required field");
    expect(onSubmit).not.toHaveBeenCalled();
});

test("Validation ok", async () => {
    const onSubmit = jest.fn();

    const {getByText, getByLabelText} = render(
        <AddContactForm onSubmit={onSubmit} />
    );

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

    // onSubmit se zavolá asynchronně, tak na něj musíme počkat
    await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });
});
```
