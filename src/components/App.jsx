import { useSelector, useDispatch } from 'react-redux';
import { add, remove } from 'redux/phonebookSlice';
import { update } from 'redux/filterSlice';
import { getFilter, getContacts } from 'redux/selectors';

import Section from 'components/Section';
import Phonebook from 'components/Phonebook/';
import Contacts from 'components/Contacts';
import Filter from 'components/Filter';

export default function App() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const onFilterChange = e => {
    const value = e.target.value;
    dispatch(update(value));
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
    dispatch(remove(deleteId));
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
        <Filter filter={filter} onFilterChange={onFilterChange} />
        <Contacts
          contacts={filterContacts()}
          onButtonClick={onDeleteBtnClick}
        />
      </Section>
    </>
  );
}
