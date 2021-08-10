import classes from './Input.module.css';
import { Field, FastField } from "formik";
import React from 'react';

export const Input = (props) => {
    return (
        <div className={classes.InputWrapper}>
            <label>{props.label}</label>
            <FastField {...props.config} />
        </div>
    )
}