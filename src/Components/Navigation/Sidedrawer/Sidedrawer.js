import classes from './Sidedrawer.module.css';
import MobileNavigationItems from "../MobileNavigationItems/MobileNavigationItems";

const Sidedrawer = props => {
    let classNames = [classes.Sidedrawer, props.open ? classes.Open : null].join(' ');

    return (
        <nav className={classNames}>
            <MobileNavigationItems clicked={props.clicked}/>
        </nav>
    )
}

export default Sidedrawer;