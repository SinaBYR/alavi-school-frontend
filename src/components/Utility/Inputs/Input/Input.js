import classes from './Input.module.css';
import { FastField } from "formik";
import React from 'react';
import { BiError } from 'react-icons/bi';

export const Input = ({ label, config, style, error}) => {
    return (
        <div className={classes.InputWrapper} style={style}>
            <label>{label}</label>
            <FastField {...config} style={{borderColor: error && 'red'}}/>
            {
                error &&
                <p className={classes.DesktopError}>{error}</p>
            }
            {
                error &&
                <p className={classes.MobileError}><BiError />&nbsp;{error}</p>
            }
        </div>
    )
}