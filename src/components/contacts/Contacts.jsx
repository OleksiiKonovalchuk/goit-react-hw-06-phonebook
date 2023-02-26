import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'redux/contacts/contact-slice';
import { getAllContacts } from 'redux/contacts/contact-selectors';
import { getFilteredContacts } from 'redux/filter/filter-selectors';

import css from './contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getAllContacts);
  const filter = useSelector(getFilteredContacts);
  const filterContactsContacts = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleDelete = id => {
    const action = removeContact(id);
    dispatch(action);
  };
  const elements = filterContactsContacts?.map(({ name, id, number }) => {
    return (
      <li className={css.item} key={id} name={id}>
        <p className={css.text}>
          {name}: {number}
        </p>
        <button
          type="button"
          className={css.button}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </li>
    );
  });

  return <ul className={css.list}>{elements}</ul>;
};
export default Contacts;
