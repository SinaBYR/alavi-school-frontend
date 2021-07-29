import classes from './ButtonOne.module.css';

const ButtonOne = props => {
    return <button className={classes.ButtonOne} {...props}>{props.children}</button>
}

export default ButtonOne;