import { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';

const Phonebook = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const initialValue = {
    name: '',
    number: '',
  };

  const onInputChange = e => {
    const value = e.target.value;
    const { name } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error(`There is no option name - ${name}`);
    }
  };
  return (
    <>
      <Formik
        initialValues={initialValue}
        onSubmit={() => {
          onSubmit({ name, number });
          setName('');
          setNumber('');
        }}
      >
        <Form>
          <label>
            Name{' '}
            <Field
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              autoComplete="off"
              onChange={onInputChange}
              name="name"
              value={name}
            />
          </label>
          <ErrorMessage name="name" />
          <label>
            Number{' '}
            <Field
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              autoComplete="off"
              onChange={onInputChange}
              name="number"
              value={number}
            />
          </label>
          <ErrorMessage name="number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </>
  );
};

export default Phonebook;

Phonebook.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
