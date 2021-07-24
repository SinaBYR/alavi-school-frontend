import classes from './SectionOne.module.css';
import LandingImage from '../../../../assets/illustrations/undraw_Online_learning_re_qw08.svg';
// import { Link } from 'react-router-dom';
import LinkOne from '../../../UI/LinkOne/LinkOne';
import HOne from '../../../UI/Headings/HOne/HOne';

// const SCHOOL_IDENTIFIERS = {
//     1: 'دبستان میدان ساعت',
//     2: 'دبستان ویلاشهر',
//     3: 'دبیرستان دوره اول'
// }

const SectionOne = props => {
    return (
        <section className={classes.SectionOne}>
            <div className={classes.Wrapper}>
                <div className={classes.Text}>
                    {/* خوش آمدید
                    {SCHOOL_IDENTIFIERS[window.location.search.slice(-1)]} */}
                    <HOne>ثبت نام آغاز شد</HOne>
                    <p>پیش دبستانی / دبستان / دبیرستان دوره اول و دوم</p>
                    <LinkOne style={{marginTop: '1rem'}} to="/">اطلاعات بیشتر</LinkOne>
                </div>
                <img src={LandingImage} alt="landing"/>

            </div>
        </section>
    )
}

export default SectionOne;