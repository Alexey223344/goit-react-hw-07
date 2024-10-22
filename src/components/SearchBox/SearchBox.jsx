import { useDispatch } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();

  const handleUserSearch = event => {
    const form = event.target;

    dispatch(changeFilter(form.value.toLowerCase()));
  };
  return (
    <div className={s.serchWrap}>
      <label>
        Find contact by name
        <input
          className={s.serchInput}
          type='text'
          onChange={handleUserSearch}
        />
      </label>
    </div>
  );
};
export default SearchBox;