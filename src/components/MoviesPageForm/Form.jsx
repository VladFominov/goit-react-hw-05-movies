import { useState } from 'react';


export const Form = ({ getInputData }) => {
  const [movieName, setMovieName] = useState('');

  const onInputChange = e => {
    const { value } = e.target;
    setMovieName(value);
  };

  const onFormSubmit = e => {
    e.preventDefault();
    setMovieName('');
    if (!movieName.length) return;
    getInputData(movieName);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <button type="submit">Search</button>
        <label>
          <input
            value={movieName}
            type="text"
            name="movieName"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
            onChange={onInputChange}
          />
        </label>
      </form>
    </div>
  );
};
