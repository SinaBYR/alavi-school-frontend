import classes from './MobileNavigationItems.module.css';
import { MdClose } from 'react-icons/md';
import SubLinkOne from '../../Utility/UI/SubLinkOne/SubLinkOne';
import { FiPlus } from 'react-icons/fi';
import AboutUsDropdownItems from '../AboutUsDropdownItems/AboutUsDropdownItems';
import EducationalContentDropdownItems from '../EducationalContentDropdownItems/EducationalContentDropdownItems';
import { useState } from 'react';

const MobileNavigationItems = props => {
    const [subMenuOneOpen, setSubMenuOneOpen] = useState(false);
    const [subMenuTwoOpen, setSubMenuTwoOpen] = useState(false);

    const subMenuOneClassNames = [classes.SubMenu, subMenuOneOpen ? classes.Open : null].join(' ');
    const subMenuTwoClassNames = [classes.SubMenu, subMenuTwoOpen ? classes.Open : null].join(' ');

    return (
        <ul className={classes.MobileNavigationItems}>
            <SubLinkOne to="/">خانه</SubLinkOne>
            <SubLinkOne to="/">تصاویر</SubLinkOne>
            <SubLinkOne to="/">اخبار</SubLinkOne>
            <li tabIndex="0" onClick={() => setSubMenuOneOpen(!subMenuOneOpen)}>محتوای آموزشی<FiPlus /></li>
            <div className={subMenuOneClassNames}>
                <EducationalContentDropdownItems />
            </div>
            <li tabIndex="0" onClick={() => setSubMenuTwoOpen(!subMenuTwoOpen)}>درباره ما<FiPlus /></li>
            <div className={subMenuTwoClassNames}>
                <AboutUsDropdownItems />
            </div>
            <SubLinkOne to="/">مشاوره</SubLinkOne>
            <SubLinkOne to="/">ارتباط با ما</SubLinkOne>
        </ul>
    )
}

export default MobileNavigationItems;