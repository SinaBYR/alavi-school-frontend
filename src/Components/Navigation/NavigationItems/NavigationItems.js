import classes from './NavigationItems.module.css';
import { NavLink } from 'react-router-dom';
import { RiArrowDropDownFill } from 'react-icons/ri';
import Logo from '../../../assets/logo.png';
import AboutUsDropdown from './AboutUsDropdown/AboutUsDropdown';
import { BiVideo } from 'react-icons/bi';

const EDUCATIONAL_CONTENT = {
    1: (
        <>
            <NavLink className={classes.SubLink} to="/">پیش دبستانی<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه اول<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه دوم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه سوم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه چهارم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه پنجم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه ششم<span><BiVideo /></span></NavLink>
        </>
    ),
    2: (
        <>
            <NavLink className={classes.SubLink} to="/">پیش دبستانی<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه اول<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه دوم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه سوم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه چهارم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه پنجم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه ششم<span><BiVideo /></span></NavLink>
        </>
    ),
    3: (
        <>
            <NavLink className={classes.SubLink} to="/">پایه هفتم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه هشتم<span><BiVideo /></span></NavLink>
            <NavLink className={classes.SubLink} to="/">پایه نهم<span><BiVideo /></span></NavLink>
        </>
    )
}

const NavigationItems = props => {


    const educationalContentList = EDUCATIONAL_CONTENT[window.location.search.slice(-1)];

    console.log(window.location)
    return (
        <nav className={classes.NavigationItems}>
            {/* <div className={classes.SchoolName}>{'علوی'}</div> */}
            <img className={classes.Logo} src={Logo} alt="logo"/>
            <ul className={classes.Items}>
                <NavLink className={classes.Link} to="/">خانه</NavLink>
                <NavLink className={classes.Link} to="/">تصاویر</NavLink>
                <NavLink className={classes.Link} to="/">اخبار</NavLink>
                <div className={classes.EducationalContent}>
                    <NavLink className={classes.Link} to="/">محتوای آموزشی <RiArrowDropDownFill /></NavLink>
                    <div className={classes.EducationalContentSubMenu}>
                        <div className={classes.EducationalContentSubMenuWrapper}>
                            {educationalContentList}
                        </div>
                    </div>
                </div>
                
                <div className={classes.AboutUs}>
                    <NavLink className={classes.Link} to={window.location.pathname + window.location.search} >درباره ما <RiArrowDropDownFill /></NavLink>
                    <div className={classes.AboutUsSubMenu}>
                        <div className={classes.AboutUsSubMenuWrapper}>
                            <NavLink className={classes.SubLink} to="/">چشم انداز</NavLink>
                            <NavLink className={classes.SubLink} to="/">رسالت</NavLink>
                            <NavLink className={classes.SubLink} to="/">اهداف</NavLink>
                            <NavLink className={classes.SubLink} to="/">منشور اخلاقی</NavLink>
                            <NavLink className={classes.SubLink} to="/">افتخارات</NavLink>
                            <NavLink className={classes.SubLink} to="/">امکانات</NavLink>
                            <NavLink className={classes.SubLink} to="/">تاریخچه</NavLink>
                            <NavLink className={classes.SubLink} to="/">کادر اجرایی</NavLink>
                            <NavLink className={classes.SubLink} to="/">کادر آموزشی</NavLink>
                        </div>
                    </div>
                </div>
                <NavLink className={classes.Link} to="/">مشاوره</NavLink>
                <NavLink className={classes.Link} to="/">ارتباط با ما</NavLink>
            </ul>

        </nav>
    )
}

export default NavigationItems;