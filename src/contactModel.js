import * as yup from "yup";
import axios from "axios";

export const contactValidation = yup.object().shape({
    name: yup.string().required(),
    phone: yup.string().required("Neni vyplneno"),
    email: yup.string().required().email(),
});

export function saveContact(contact) {
    return axios.post("/items", contact);
}

export function loadContacts() {
    return axios.get("/items").then((res) => res.data.items);
}
