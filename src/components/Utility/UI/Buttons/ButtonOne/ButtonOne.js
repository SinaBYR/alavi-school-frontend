import classes from './ButtonOne.module.css';

export const ButtonOne = props => <button className={classes.ButtonOne} {...props}>{props.children}</button>