import { useState, } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add } from 'redux/phonebookSlice';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook/';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';


export default function App() {
  const contacts = useSelector(state => state.phonebook.contacts);
  // const [contacts, setContacts] = useState(() => defaultContacts);
  const [filter, setFilter] = useState('');

  const dispatch = useDispatch();


  const onInputChange = e => {
    const value = e.target.value;
    const { name } = e.target;

    switch (name) {
      case 'filter':
        setFilter(value);
        break;
      default:
        throw new Error(`There is no option name - ${name}`);
    }
  };

  const onSubmitForm = ({ name, number }) => {
    const isContact = contacts.find(contact => contact.name === name);
    if (isContact) {
      alert(`${name} is already exists`);
      return;
    }
    dispatch(add(name, number));
  };

  const onDeleteBtnClick = deleteId => {
    // const newContactList = contacts.filter(({ id }) => id !== deleteId);
    // setContacts(newContactList);
  };

  const filterContacts = () => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <Section title="Phonebook">
        <Phonebook onSubmit={onSubmitForm} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} onFilterChange={onInputChange} />
        <Contacts
          contacts={filterContacts()}
          onButtonClick={onDeleteBtnClick}
        />
      </Section>
    </>
  );
}
