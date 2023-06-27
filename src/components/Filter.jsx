import { useState } from "react";

function Filter() {
  const [filtered, setFiltered] = useState(null);

  const filterHandler = (e) => {
    setFiltered(e.target.value);
  };
  return (
    <select onChange={filterHandler}>
      <option value="with"></option>
      <option value="without"></option>
    </select>
  );
}

export default Filter;
