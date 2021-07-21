import classes from './TopNav.module.css';
import { FaTelegram, FaInstagram } from 'react-icons/fa';

const SCHOOL_IDENTIFIERS = {
    1: 'دبستان میدان ساعت',
    2: 'دبستان ویلاشهر',
    3: 'دبیرستان دوره اول'
}

const TopNav = props => {
    return (
        <div className={classes.TopNav}>
            <div className={classes.Wrapper}>
                <div className={classes.SchoolName}>
                    {/* {SCHOOL_IDENTIFIERS[window.location.search.slice(-1)]} */}
                    تماس با ما
                </div>
                <div className={classes.Social}>
                    <FaTelegram color="#0088CC"/>
                    <FaInstagram />
                    {/* <div>کانال تلگرام</div> */}
                    {/* <div>کانال تلگرام</div> */}
                </div>
            </div>
        </div>
    )
}

export default TopNav;