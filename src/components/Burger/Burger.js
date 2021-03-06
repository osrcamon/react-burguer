import React from 'react';

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

import classes from './Burger.css';

const Burger = props => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map(ingKey => {
      return [ ...Array(props.ingredients[ingKey])]
        .map((_, i) => 
          <BurgerIngredient key={ingKey + i} type={ingKey} />)
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, []);
  
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient key="bread-top" type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient key="bread-bottom" type="bread-bottom" />
    </div>
  );
}

export default Burger;