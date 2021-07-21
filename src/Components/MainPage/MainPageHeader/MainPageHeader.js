import { NavLink } from 'react-router-dom';
import classes from './MainPageHeader.module.css';
import NavigationItems from '../../Navigation/NavigationItems/NavigationItems';
import Container from '../../UI/Container/Container';


const MainPageHeader = props => {
    return (
        <header className={classes.MainPageHeader}>
            <div className={classes.Wrapper}>
                <NavigationItems />
                <div className={classes.Profile}>
                    <NavLink to={"/school/login?sch=" + window.location.search.slice(-1)}>ورود / ثبت نام</NavLink>
                    {/* <NavLink to="/signup"></NavLink> */}
                </div>
            </div>
        </header>
    )   
}

export default MainPageHeader;