import classes from './PublicHeader.module.css';
import { useEffect, useState } from 'react';
import { Burger, LinkOne } from '../../Utility/UI';
import Logo from '../../../assets/logo.png';
import DesktopNavigationItems from '../DesktopNavigationItems/DesktopNavigationItems';
import Sidedrawer from '../Sidedrawer/Sidedrawer';
import { MdAccountBox } from 'react-icons/md';
import { useLocation } from 'react-router-dom';

const PublicHeader = props => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const location = useLocation();

    const openCloseSidedrawerHandler = (isOpen) => {
        if(isOpen) {
            return setMobileNavOpen(false)
        }

        setMobileNavOpen(true)
    }

    useEffect(() => {
        setMobileNavOpen(false)
    }, [location])

    return (
        <header className={classes.PublicHeader}>
            <Sidedrawer open={mobileNavOpen} />
            <div className={classes.Wrapper}>
                <Burger open={mobileNavOpen} clicked={() => openCloseSidedrawerHandler(mobileNavOpen)}/>
                <img className={classes.Logo} src={Logo} alt="logo"/>
                <DesktopNavigationItems />
                <div className={classes.Profile}>
                    <LinkOne to="/school/auth">ورود / ثبت نام</LinkOne>
                </div>
                <LinkOne to="/school/auth" className={classes.ProfileIcon}>
                        <MdAccountBox />
                </LinkOne>
            </div>
        </header>
    )   
}

export { PublicHeader }