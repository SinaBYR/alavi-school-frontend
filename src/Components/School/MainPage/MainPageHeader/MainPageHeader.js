import { NavLink } from 'react-router-dom';
import classes from './MainPageHeader.module.css';
import NavigationItems from '../../../Navigation/NavigationItems/NavigationItems';
import TopNav from '../../../Navigation/TopNav/TopNav';
import LinkOne from '../../../UI/LinkOne/LinkOne.';
// import Container from '../../UI/Container/Container';


const MainPageHeader = props => {


    return (
        <header className={classes.MainPageHeader}>
            <div className={classes.Wrapper}>
                <NavigationItems />
                <div className={classes.Profile}>
                    <LinkOne to={"/school/login?sch=" + window.location.search.slice(-1)}>ورود / ثبت نام</LinkOne>
                </div>
            </div>
        </header>
    )   
}

export default MainPageHeader;