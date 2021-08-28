import classes from './MobileNavigationItems.module.css';
import { useEffect, useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import { SubLinkOne } from '../../Utility/UI';
import AboutUsDropdownItems from '../AboutUsDropdownItems/AboutUsDropdownItems';
import EducationalContentDropdownItems from '../EducationalContentDropdownItems/EducationalContentDropdownItems';
import { useLocation } from 'react-router-dom';

const MobileNavigationItems = props => {
    const [subMenuOneOpen, setSubMenuOneOpen] = useState(false);
    const [subMenuTwoOpen, setSubMenuTwoOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setSubMenuOneOpen(false);
        setSubMenuTwoOpen(false);
    }, [location])

    const subMenuOneClassNames = [classes.SubMenu, subMenuOneOpen ? classes.Open : null].join(' ');
    const subMenuTwoClassNames = [classes.SubMenu, subMenuTwoOpen ? classes.Open : null].join(' ');

    return (
        <ul className={classes.MobileNavigationItems}>
            <SubLinkOne to="/school">خانه</SubLinkOne>
            <SubLinkOne to="/school/news">اخبار</SubLinkOne>
            <li tabIndex="0" onClick={() => setSubMenuOneOpen(!subMenuOneOpen)}>محتوای آموزشی<FiPlus /></li>
            <div className={subMenuOneClassNames}>
                <EducationalContentDropdownItems />
            </div>
            <li tabIndex="0" onClick={() => setSubMenuTwoOpen(!subMenuTwoOpen)}>درباره ما<FiPlus /></li>
            <div className={subMenuTwoClassNames}>
                <AboutUsDropdownItems />
            </div>
            <SubLinkOne to="/">مشاوره</SubLinkOne>
            <SubLinkOne to="/school/contact">ارتباط با ما</SubLinkOne>
        </ul>
    )
}

export default MobileNavigationItems;