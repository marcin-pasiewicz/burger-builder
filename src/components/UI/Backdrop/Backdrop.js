import React from 'react';
import classes from './Backdrop.css';

const Backdrop = (props) => (
    props.show ? <div className={classes.Backdrop} onClick={props.modalClose}></div> : null
);

export default Backdrop;