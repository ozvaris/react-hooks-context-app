import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactForm from "../context/contact-from";
import ContactTable from "../components/contact-table";
import { ContactContextProvider } from "../context/contact-context";

const ContactView = () => {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">Contacts</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </ContactContextProvider>
  );
};

export default ContactView;
