import classes from './Footer.module.css';
import Enamad1 from '../../assets/samandehi.png';
import Enamad2 from '../../assets/samandehi2.png';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhone } from 'react-icons/fa';
import { SocialIcon } from 'react-social-icons';

const Footer = props => {
    return (
        <footer className={classes.Footer}>
            <div className={classes.Wrapper}>

                <div className={classes.About}>
                    <h2>مجتمع آموزشی علوی</h2>
                    <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز است.</p>
                    <div className={classes.SVGs}>
                        <img src={Enamad1} alt="samandehi"/>
                        <img src={Enamad2} alt="enamad"/>
                    </div>
                </div>

                <div className={classes.Links}>
                    <h2>بخش های سایت</h2>
                    <ul className={classes.LinksWrapper}>
                        <li>خانه</li>
                        <li>اخبار</li>
                        <li>مشاوره</li>
                        <li>تاریخچه</li>
                    </ul>
                </div>

                <div className={classes.Contact}>

                    <div className={classes.Branch}>
                        <h3>دبستان غیر دولتی علوی 1</h3>
                        <div className={classes.ContactItem}>
                            <div className={classes.Icon}>
                                <IoLocationSharp fontSize="20px"/>
                            </div>
                            <div className={classes.Info}>
                                تبریز - ارتش جنوبی - میدان ساعت کوچه فهیمی - ساختمان علوی 
                            </div>
                        </div>
                        <div className={classes.ContactItem}>
                            <div className={classes.Icon}>
                                <FaPhone fontSize="20px"/>
                            </div>
                            <div className={classes.Info}>
                                04135562524
                            </div>
                        </div>
                        <div className={classes.ContactItem}>
                            <div className={classes.Icon}>
                                <FaPhone fontSize="20px"/>
                            </div>
                            <div className={classes.Info}>
                                04135556002
                            </div>
                        </div>
                    </div>

                    <div className={classes.Branch}>
                        <h3>دبستان غیر دولتی علوی 2</h3>
                        <div className={classes.ContactItem}>
                            <div className={classes.Icon}>
                                <IoLocationSharp fontSize="20px"/>
                            </div>
                            <div className={classes.Info}>
                                تبریز - ائل گولی - کوی ویلاشهر - انتهای خیابان گلها
                            </div>
                        </div>
                        <div className={classes.ContactItem}>
                            <div className={classes.Icon}>
                                <FaPhone fontSize="20px"/>
                            </div>
                            <div className={classes.Info}>
                                04133821930
                            </div>
                        </div>
                    </div>

                    <div className={classes.Branch}>
                        <h3>دبیرستان علوی ( متوسطه دوره اول )</h3>
                        <div className={classes.ContactItem}>
                            <div className={classes.Icon}>
                                <IoLocationSharp fontSize="20px"/>
                            </div>
                            <div className={classes.Info}>
                                تبریز - ائل گولی - کوی ویلاشهر - انتهای خیابان گلها
                            </div>
                        </div>
                        <div className={classes.ContactItem}>
                            <div className={classes.Icon}>
                                <FaPhone fontSize="20px"/>
                            </div>
                            <div className={classes.Info}>
                                04133822513
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={classes.BottomFooter}>
                <div className={classes.Copyright}>
                    کلیه حقوق این وب‌سایت محفوظ و متعلق به مجموعه مدارس علوی می‌باشد.
                </div>
                <div className={classes.Socials}>
                    <SocialIcon style={{width: '30px', height: '30px'}} url="telegram.me"/>
                    <SocialIcon style={{width: '30px', height: '30px'}} url="instagram.com"/>
                    <SocialIcon style={{width: '30px', height: '30px'}} url="linkedin.com"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;