import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import Form from './form/Form';
import Contacts from './contacts/Contacts';
import Filter from './filter/Filter';
import { nanoid } from 'nanoid';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem('contacts'));
    if (savedContacts) {
      setContacts([...savedContacts]);
    }
  }, []);
  useEffect(() => {
    if (contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }, [contacts]);

  const onDelete = id => {
    const personToFind = id;
    const newContacts = contacts.filter(({ id }) => id !== personToFind);
    setContacts([...newContacts]);
  };
  const submitCatcher = ({ name, number }) => {
    const nameToAdd = name;
    const addCheck = contacts.find(({ name }) => name.includes(nameToAdd));
    if (!addCheck) {
      const person = {
        name: `${name}`,
        id: `${nanoid()}`,
        number: `${number}`,
      };
      setContacts(prevContacts => [...prevContacts, person]);
    } else {
      alert(`${nameToAdd} is already in contacts`);
    }
  };
  function filteredNames() {
    const filtered = contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
    return filtered;
  }
  return (
    <div className={css.App}>
      <h1>Phonebook</h1>
      <Form onSubmit={submitCatcher} />

      <h2>Contacts</h2>
      <Filter onFilter={setFilter} />
      <Contacts contacts={filteredNames()} onDelete={onDelete} />
    </div>
  );
};

export default App;
