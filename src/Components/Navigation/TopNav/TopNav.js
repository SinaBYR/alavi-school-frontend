import classes from './TopNav.module.css';
import { FaTelegram, FaInstagram } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';
import { NavLink } from 'react-router-dom';

const SCHOOL_IDENTIFIERS = {
    1: 'دبستان میدان ساعت',
    2: 'دبستان ویلاشهر',
    3: 'دبیرستان دوره اول'
}

const TopNav = props => {
    // const urlParams = new URLSearchParams(window.location.search);
    // urlParams.get('sch');
    // console.log(urlParams.get('sch'))
    const schoolBranch = localStorage.getItem('branch');

    return (
        <div className={classes.TopNav}>
            <div className={classes.Wrapper}>
                <div>
                    <NavLink className={classes.Branch} to="/">علوی تبریز</NavLink>
                    {/* <span> / {SCHOOL_IDENTIFIERS[window.location.search.slice(-1)]}</span> */}
                    {/* <span> / {SCHOOL_IDENTIFIERS[urlParams.get('sch')]}</span> */}
                    <span> / {SCHOOL_IDENTIFIERS[schoolBranch]}</span>
                </div>
                <div className={classes.Social}>
                    {/* <FaTelegram color="#0088CC"/> */}
                    {/* <FaInstagram /> */}
                    <SocialIcon style={{width: '30px', height: '30px'}} url="telegram.me"/>
                    <SocialIcon style={{width: '30px', height: '30px'}} url="instagram.com"/>
                    {/* <SocialIcon style={{width: '30px', height: '30px'}} url="youtube.com" /> */}
                    {/* <div>کانال تلگرام</div> */}
                    {/* <div>کانال تلگرام</div> */}
                </div>
            </div>
        </div>
    )
}

export default TopNav;