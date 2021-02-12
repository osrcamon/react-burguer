import React from 'react';

import Button from '../../UI/Button/Button';

const OrderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => 
      <li key={igKey}>
        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
        {props.ingredients[igKey]}
      </li>
    );

  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to checkout?</p>
      <Button
        buttonType="Danger"
        onClick={props.purchaseCancelled}
      >
        CANCEL
      </Button>
      <Button
        buttonType="Success"
        onClick={props.purchaseContinue}
      >
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummary;