import classes from './PublicHeader.module.css';
import { useState } from 'react';
import DesktopNavigationItems from '../DesktopNavigationItems/DesktopNavigationItems';
import LinkOne from '../../Utility/UI/LinkOne/LinkOne';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import Burger from '../../Utility/UI/Burger/Burger';
import Logo from '../../../assets/logo.png';
import { MdAccountBox } from 'react-icons/md';

const PublicHeader = props => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const burgerClassNames = [classes.Burger]
    

    const openCloseSidedrawer = (isOpen) => {
        if(isOpen) {
            return setMobileNavOpen(false)
        }

        setMobileNavOpen(true)
    }

    return (
        <>
        <header className={classes.PublicHeader}>
            <Sidedrawer open={mobileNavOpen} clicked={openCloseSidedrawer}/>
            <div className={classes.Wrapper}>
                <Burger open={mobileNavOpen} clicked={() => openCloseSidedrawer(mobileNavOpen)}/>
                <img className={classes.Logo} src={Logo} alt="logo"/>
                <DesktopNavigationItems />
                <div className={classes.Profile}>
                    <LinkOne to={"/school/login?sch=" + window.location.search.slice(-1)}>ورود / ثبت نام</LinkOne>
                </div>
                <div className={classes.ProfileIcon}>
                    <MdAccountBox />
                </div>
            </div>
        </header>
        </>
    )   
}

export default PublicHeader;