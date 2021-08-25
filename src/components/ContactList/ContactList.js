import PropTypes from "prop-types";
import { Button } from "@material-ui/core";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    {contacts.map((contact) => (
      <li key={contact.id} className={styles.item}>
        <span>
          {contact.name}:{contact.number}
        </span>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => onDelete(contact.id)}
        >
          Delete
        </Button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ContactList;
