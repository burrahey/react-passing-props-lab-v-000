import React from 'react';

const Filter = (props) => {
  return (
    <select onChange={props.handleChange} defaultValue='all'>
      <option value='all'>All</option>
      {props.filters.map(filter =>
        <option key={filter} value={filter}>{filter}</option>
      )}
    </select>
  );
}

Filter.defaultProps = {
  fruit: [],
  currentFilter: 'all',
  filters: [],
  handleChange: () => {console.log("nope in filter")}
}

export default Filter;
