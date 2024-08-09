import s from './SearchBox.module.css';

export default function SearchBox({ value, onChange }) {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Find contacts by name</h2>
      <input
        className={s.input}
        value={value}
        type="text"
        onChange={onChange}
      />
    </div>
  );
}
