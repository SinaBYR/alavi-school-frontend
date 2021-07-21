import classes from './NavigationItems.module.css';
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownFill } from 'react-icons/ri';

const NavigationItems = props => {
    return (
        <nav className={classes.NavigationItems}>
            <div className={classes.SchoolName}>{'دبیرستان دوره اول'}</div>
            <ul className={classes.Items}>
                <NavLink to="/">خانه</NavLink>
                <NavLink to="/">تصاویر</NavLink>
                <NavLink to="/">اخبار</NavLink>
                <NavLink to="/">محتوای آموزشی <RiArrowDropDownFill /></NavLink>
                <NavLink to="/">مشاوره</NavLink>
                <NavLink to="/">درباره ما <RiArrowDropDownFill /></NavLink>
            </ul>
        </nav>
    )
}

export default NavigationItems;