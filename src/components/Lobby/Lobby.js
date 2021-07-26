import classes from './Lobby.module.css';
import { IoSchoolSharp } from 'react-icons/io5'
import LinkOne from '../Utility/UI/LinkOne/LinkOne';
import Logo from '../../assets/logo.png';
import HOne from '../Utility/UI/Headings/HOne/HOne';
import HTwo from '../Utility/UI/Headings/HTwo/HTwo';

const Lobby = props => {
    const setSchoolBranch = branch => {
        localStorage.setItem('branch', branch);
    }

    return (
        <div className={classes.Lobby}>
            {/* <IoSchoolSharp fontSize="6rem"/> */}
            <img className={classes.Logo} src={Logo} alt="logo"/>
            <HOne>مجتمع آموزشی علوی</HOne>
            <HTwo>Tabriz Alavi Academy</HTwo>
            <div className={classes.LinksWrapper}>
                <LinkOne onClick={() => setSchoolBranch(1)} to="/school">دبستان میدان ساعت</LinkOne>
                <LinkOne onClick={() => setSchoolBranch(2)} to="/school">دبستان ویلاشهر</LinkOne>
                <LinkOne onClick={() => setSchoolBranch(3)} to="/school">دبیرستان دوره اول</LinkOne>
            </div>
        </div>
    )
}

export default Lobby;