import classes from './HThree.module.css';

const HThree = props => <h2 className={classes.HThree} {...props}>{props.children}</h2>;

export default HThree;