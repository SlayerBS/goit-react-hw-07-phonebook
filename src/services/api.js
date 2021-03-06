import axios from "axios";
// require("dotenv").load();
// require("dotenv").config();

axios.defaults.baseURL = process.env.REACT_APP_DB_HOST;
// axios.defaults.baseURL = "http://localhost:3010";

export function fetchContacts() {
  return axios.get("/contacts");
}

export function addContact(contact) {
  console.log(contact);
  return axios.post("/contacts", contact);
}

export function deleteContact(id) {
  return axios.delete(`/contacts/${id}`);
}

export default { fetchContacts, addContact, deleteContact };
