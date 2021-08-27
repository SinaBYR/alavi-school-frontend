import classes from './Report.module.css';
import image from '../../../../assets/kitten.jpg';
import { BiCalendarEdit } from 'react-icons/bi';
import { FiEye } from 'react-icons/fi';
import HTwo from '../../../Utility/UI/Headings/HTwo/HTwo'

const Report = props => {
    return (
        <div className={classes.Report}>
            <HTwo style={{textAlign: 'center'}}>راهپیمایی 22 بهمن</HTwo>
            <div className={classes.Header}>
                <div style={{
                    textAlign: 'center'
                }}>
                    <BiCalendarEdit />
                    <div>16 اسفند 1398</div>
                </div>

                <div style={{
                    textAlign: 'center'
                }}>
                    <FiEye />
                    <div>274</div>
                </div>
            </div>
            <div>
                <img src={image} alt="kitten" className={classes.Img}/>
            </div>
            <div className={classes.Text}>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری  چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبدرا برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
                </p>
            </div>
        </div>
    )
}

export { Report }