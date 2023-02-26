import React from 'react';
import css from './filter.module.css';
import { filterContacts } from '../../redux/filter/filter-slice';
import { useDispatch } from 'react-redux';
const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = value => dispatch(filterContacts(value));
  return (
    <label className={css.label}>
      <span className={css.span}>Find contacts by name</span>
      <input
        className={css.input}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        onChange={e => handleChange(e.target.value)}
      />
    </label>
  );
};
export default Filter;
