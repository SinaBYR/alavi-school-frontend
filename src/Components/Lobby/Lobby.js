import classes from './Lobby.module.css';
import { IoSchoolSharp } from 'react-icons/io5'
import LinkOne from '../UI/LinkOne/LinkOne';

const Lobby = props => {
    return (
        <div className={classes.Lobby}>
            <IoSchoolSharp fontSize="6rem"/>
            <h1>مجتمع آموزشی علوی</h1>
            <h2>Tabriz Alavi Academy</h2>
            <div className={classes.LinksWrapper}>
                <LinkOne to="/school?sch=1">دبستان میدان ساعت</LinkOne>
                <LinkOne to="/school?sch=2">دبستان ویلاشهر</LinkOne>
                <LinkOne to="/school?sch=3">دبیرستان دوره اول</LinkOne>
            </div>
        </div>
    )
}

export default Lobby;