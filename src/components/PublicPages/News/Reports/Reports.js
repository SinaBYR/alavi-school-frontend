import classes from './Reports.module.css';
import { CardTwo } from '../../../Utility/UI/Cards/CardTwo/CardTwo';
import image from '../../../../assets/kitten.jpg';
import imageOne from '../../../../assets/bird.jpg';
import imageTwo from '../../../../assets/bird-1.jpg';
import imageThree from '../../../../assets/monkey.jpg';

const Reports = props => {
    return (
        <div className={classes.Reports}>
            <h2 style={{textAlign: 'center'}}>اخبار مجموعه</h2>
            <div className={classes.ReportsWrapper}>
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
    )
}

export { Reports }