import classes from './Burger.module.css';

const Burger = props => {
    const classNames = [classes.Burger, props.open ? classes.Open : null].join(' ');

    return (
        <div className={classNames} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default Burger;