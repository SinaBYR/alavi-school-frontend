import classes from './Lobby.module.css';
import { IoSchoolSharp } from 'react-icons/io5'
import LinkOne from '../Utility/UI/LinkOne/LinkOne';
import Logo from '../../assets/logo.png';
import HOne from '../Utility/UI/Headings/HOne/HOne';
import HTwo from '../Utility/UI/Headings/HTwo/HTwo';

const Lobby = props => {
    return (
        <div className={classes.Lobby}>
            {/* <IoSchoolSharp fontSize="6rem"/> */}
            <img className={classes.Logo} src={Logo} alt="logo"/>
            <HOne>مجتمع آموزشی علوی</HOne>
            <HTwo>Tabriz Alavi Academy</HTwo>
            <div className={classes.LinksWrapper}>
                <LinkOne to="/school?sch=1">دبستان میدان ساعت</LinkOne>
                <LinkOne to="/school?sch=2">دبستان ویلاشهر</LinkOne>
                <LinkOne to="/school?sch=3">دبیرستان دوره اول</LinkOne>
            </div>
        </div>
    )
}

export default Lobby;