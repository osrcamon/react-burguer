import React from 'react';

import Button from '../../UI/Button/Button';

class OrderSummary extends React.Component {
  componentDidUpdate() {
    console.log('[Order Summary ] updated!')
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => 
        <li key={igKey}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: 
          {this.props.ingredients[igKey]}
        </li>
      );

    return (
      <React.Fragment>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button
          buttonType="Danger"
          onClick={this.props.purchaseCancelled}
        >
          CANCEL
        </Button>
        <Button
          buttonType="Success"
          onClick={this.props.purchaseContinue}
        >
          CONTINUE
        </Button>
      </React.Fragment>
    );
  } 
  
};

export default OrderSummary;