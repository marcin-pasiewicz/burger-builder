import React from 'react';

import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current price: <strong>{props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                added={() => props.ingredientAdded(control.type)}
                remove={() => props.ingredientRemove(control.type)}
                disabled={props.disabled[control.type]}
            />
        ))}
        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
            onClick={props.ordered}
        >
            ORDER NOW
        </button>
    </div>
);

export default BuildControls;