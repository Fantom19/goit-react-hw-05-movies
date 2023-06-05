import React from 'react';
import css from './Form.module.css';

const Form = ({ handleSubmit, searchQuery, setSearchQuery }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your query here, please"
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
        className={css.input}
      />
      <button type="submit" className={css.button}>
        Search
      </button>
    </form>
  );
};

export default Form;
