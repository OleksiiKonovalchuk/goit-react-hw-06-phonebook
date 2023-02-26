import React, { useState } from 'react';
import css from './form.module.css';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/contact-slice';
import { getAllContacts } from '../../redux/contacts/contact-selectors';

const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const formSumbit = e => {
    e.preventDefault();
    const nameToAdd = name;
    const addCheck = contacts?.find(({ name }) => name.includes(nameToAdd));
    if (!addCheck) {
      dispatch(addContact({ name, number }));
    } else {
      alert(`${nameToAdd} is already in contacts`);
    }
    reset();
  };
  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={formSumbit}>
      <label className={css.label}>
        <span className={css.span}>Name</span>
        <input
          className={css.input}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={e => {
            setName(e.target.value);
          }}
          required
        />
      </label>
      <label className={css.label}>
        <span className={css.span}>Number</span>
        <input
          className={css.input}
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={e => {
            setNumber(e.target.value);
          }}
          required
        />
      </label>
      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
Form.propTypes = { onSubmit: PropTypes.func };
