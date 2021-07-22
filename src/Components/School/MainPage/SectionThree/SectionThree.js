import classes from './SectionThree.module.css';
import Image1 from '../../../../assets/illustrations/undraw_book_reading_kx9s.svg';
import Image2 from '../../../../assets/illustrations/undraw_Growing_re_olpi.svg';
import Image3 from '../../../../assets/illustrations/undraw_Faq_re_31cw.svg';
import Image4 from '../../../../assets/students.jpg';

const SectionThree = props => {
    return (
        <section className={classes.SectionThree}>
            <div className={classes.Wrapper}>
                <h2>افتخارات</h2>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.</p>
                <div className={classes.Showcase}>
                    <div className={classes.Achievement}>
                        <p>بهمن 97</p>
                        <img src={Image4} alt="achievement"/>
                    </div>
                    <div className={classes.Achievement}>
                        <p>اردیبهشت 98</p>
                        <img src={Image4} alt="achievement"/>
                    </div>
                    <div className={classes.Achievement}>
                        <p>آذرماه 96</p>
                        <img src={Image4} alt="achievement"/>
                    </div>
                    <div className={classes.Achievement}>
                        <p>خرداد 97</p>
                        <img src={Image4} alt="achievement"/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionThree;