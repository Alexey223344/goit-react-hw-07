import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import {addFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleFoundUser = event => {
    const form = event.target;

    dispatch(addFilter(form.value.toLowerCase()));
  };
  return (
    <div className={s.sbox}>
      <label>
        Find contact by name
        <input
          className={s.sinput}
          type='text'
          onChange={handleFoundUser}
        />
      </label>
    </div>
  );
};
export default SearchBox;