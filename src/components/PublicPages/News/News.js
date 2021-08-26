import classes from './News.module.css';
import image from '../../../assets/kitten.jpg';
import imageOne from '../../../assets/bird.jpg';
import imageTwo from '../../../assets/bird-1.jpg';
import imageThree from '../../../assets/monkey.jpg';
import { CardTwo } from '../../Utility/UI/Cards/CardTwo/CardTwo';

const News = props => {
    return (
        <div className={classes.News}>
            <div className={classes.Wrapper}>
                <h2 style={{textAlign: 'center'}}>اخبار مجموعه</h2>
                <div className={classes.Content}>
                    <CardTwo
                        title="راهپیمایی 22 بهمن"
                        src={imageOne}
                        path="/school/news/274698"
                        views="267"
                        date="24 بهمن"
                        />
                    <CardTwo
                        title="روز دانش آموز"
                        src={imageTwo}
                        path="/school/news/274698"
                        views="267"
                        date="4 آبان"
                        />
                    <CardTwo
                        title="برنامه امتحانات نوبت اول"
                        src={image}
                        path="/school/news/274698"
                        views="267"
                        date="16 اردیبهشت"
                        />
                    <CardTwo
                        title="جلسه دیدار با اولیا"
                        src={imageThree}
                        path="/school/news/274698"
                        views="267"
                        date="28 فروردین"
                        />
                </div>
            </div>
        </div>
    )
}

export { News }