import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  return (
    <div className="fruit-basket">
      <Filter fruit={props.fruit} filters={props.filters} currentFilter={props.currentFilter} handleChange={props.handleChange}/>
      <FilteredFruitList  fruit={props.fruit} filter={props.currentFilter} />
    </div>
  );
}

FruitBasket.defaultProps = {
  fruit: [],
  currentFilter: 'all',
  filters: [],
  updateFilterCallback: () => {console.log("not working in fruitbasket")}
}

export default FruitBasket;
