import classes from './HThree.module.css';

const HThree = props => <h3 className={classes.HThree} {...props}>{props.children}</h3>;

export default HThree;