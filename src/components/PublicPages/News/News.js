import classes from './News.module.css';
import image from '../../../assets/kitten.jpg';
import LinkOne from '../../Utility/UI/LinkOne/LinkOne';

const News = props => {
    return (
        <div className={classes.News}>
            <div className={classes.Wrapper}>
                <h2 style={{textAlign: 'center'}}>اخبار مجموعه</h2>
                <div className={classes.Content}>
                    <div className={classes.CardTwo}>
                        <h3>برنامه امتحانات نوبت دوم اصلاحيه</h3>
                        <div className={classes.Thumbnail}>
                            <img src={image} alt="kitten"/>
                        </div>
                        <LinkOne to="school/news/249763" style={{marginRight: 'auto'}}>ادامه مطلب</LinkOne>
                    </div>
                    <div className={classes.CardTwo}>
                        <h3>برنامه امتحانات نوبت دوم اصلاحيه</h3>
                        <div className={classes.Thumbnail}>
                            <img src={image} alt="kitten"/>
                        </div>
                        <LinkOne to="school/news/987234" style={{marginRight: 'auto'}}>ادامه مطلب</LinkOne>
                    </div>
                    <div className={classes.CardTwo}>
                        <h3>راهپیمایی 22 بهمن</h3>
                        <div className={classes.Thumbnail}>
                            <img src={image} alt="kitten"/>
                        </div>
                        <LinkOne to="school/news/139843" style={{marginRight: 'auto'}}>ادامه مطلب</LinkOne>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { News }