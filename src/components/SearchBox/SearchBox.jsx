import { useDispatch, useSelector } from 'react-redux';
import s from './SearchBox.module.css';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const dispatch = useDispatch();
  const currentInput = useSelector(selectNameFilter);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        value={currentInput}
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
}
