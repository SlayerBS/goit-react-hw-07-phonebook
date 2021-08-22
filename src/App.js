import React, { Component } from "react";
import { connect } from "react-redux";
import ContactList from "./components/ContactList";
import Container from "./components/Container";
import Filter from "./components/Filter";
import ContactForm from "./components/ContactForm";
import Section from "./components/Section";
import contactsSelectors from "./redux/contacts/selectors";
import { fetchContacts } from "./redux/contacts/operations";
import { changeFilter } from "./redux/contacts/actions";

class App extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <Container>
        <Section title="Phonebook">
          <ContactForm />
        </Section>
        <Section title="Contacts">
          <Filter />
          <ContactList />
        </Section>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getAllContacts(state),
  isLoading: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});
const mapDispatchToProps = (dispatch) => ({
  fetchContacts: () => dispatch(fetchContacts()),
  clearFilter: () => dispatch(changeFilter("")),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
