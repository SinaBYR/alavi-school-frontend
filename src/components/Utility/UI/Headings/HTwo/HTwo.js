import classes from './HTwo.module.css';

const HTwo = props => <h2 className={classes.HTwo} {...props}>{props.children}</h2>;

export default HTwo;