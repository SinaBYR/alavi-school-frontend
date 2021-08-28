import classes from './HOne.module.css';
export const HOne = props => <h1 className={classes.HOne} {...props}>{props.children}</h1>;