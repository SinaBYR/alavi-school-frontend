import classes from './AboutUsDropdown.module.css';

const AboutUsDropdown = props => {
    return (
        <div className={classes.AboutUsDropdown}>
            <ul>
                <p>چشم انداز</p>
                <p>رسالت</p>
                <p>اهداف</p>
                <p>منشور اخلاقی</p>
                <p>افتخارات</p>
                <p>امکانات</p>
                <p>تاریخچه</p>
                <p>کادر اجرایی</p>
                <p>کادر آموزشی</p>
            </ul>
        </div>
    )
}

export default AboutUsDropdown;