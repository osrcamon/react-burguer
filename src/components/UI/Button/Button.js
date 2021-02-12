import React from 'react';

import classes from './Button.css';

export default props => (
  <button
    className={[classes.Button, classes[props.buttonType]].join(' ')}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);