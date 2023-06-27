import styles from "../css/Filter.module.css";

function Filter({ setFiltered, filtered }) {
  const filterHandler = (e) => {
    setFiltered(e.target.value);
  };

  return (
    <select className={styles.filter} value={filtered} onChange={filterHandler}>
      <option value="1">All</option>
      <option value="2">With money</option>
      <option value="3">Without money</option>
    </select>
  );
}

export default Filter;
