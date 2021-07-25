import classes from './HOne.module.css';
const HOne = props => <h1 className={classes.HOne} {...props}>{props.children}</h1>;
export default HOne;