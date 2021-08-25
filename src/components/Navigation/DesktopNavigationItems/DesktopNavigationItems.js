import classes from './DesktopNavigationItems.module.css';
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownFill } from 'react-icons/ri';
import Logo from '../../../assets/logo.png';
import AboutUsDropdownItems from '../AboutUsDropdownItems/AboutUsDropdownItems';
import EducationalContentDropdownItems from '../EducationalContentDropdownItems/EducationalContentDropdownItems';

const NavigationItems = props => {

    return (
        <nav className={classes.DesktopNavigationItems}>
            {/* <img className={classes.Logo} src={Logo} alt="logo"/> */}
            <ul className={classes.Items}>

                <NavLink className={classes.Link} to="/school">صفحه اصلی</NavLink>
                {/* <NavLink className={classes.Link} to="/">تصاویر</NavLink> */}
                <NavLink className={classes.Link} to="/school/news">اخبار</NavLink>

                <div className={classes.EducationalContent}>
                    <NavLink className={classes.Link} to="/">محتوای آموزشی <RiArrowDropDownFill /></NavLink>
                    <div className={classes.EducationalContentSubMenu}>
                        <div className={classes.EducationalContentSubMenuWrapper}>
                            <EducationalContentDropdownItems />
                        </div>
                    </div>
                </div>
                
                <div className={classes.AboutUs}>
                    <NavLink className={classes.Link} to={window.location.pathname + window.location.search} >درباره ما <RiArrowDropDownFill /></NavLink>
                    <div className={classes.AboutUsSubMenu}>
                        <div className={classes.AboutUsSubMenuWrapper}>
                            <AboutUsDropdownItems />
                        </div>
                    </div>
                </div>
                <NavLink className={classes.Link} to="/">مشاوره</NavLink>
                <NavLink className={classes.Link} to="/school/contact">ارتباط با ما</NavLink>
            </ul>

        </nav>
    )
}

export default NavigationItems;