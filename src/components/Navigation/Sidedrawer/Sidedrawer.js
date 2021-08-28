import classes from './Sidedrawer.module.css';
import MobileNavigationItems from "../MobileNavigationItems/MobileNavigationItems";

const Sidedrawer = ({open}) => {
    let classNames = [classes.Sidedrawer, open ? classes.Open : null].join(' ');

    return (
        <nav className={classNames}>
            <MobileNavigationItems />
        </nav>
    )
}

export default Sidedrawer;