import ButtonOne from '../../../../Utility/UI/ButtonOne/ButtonOne';
import classes from './Preview.module.css';

const Preview = props => {

    return (
        <div className={classes.Preview}>
            <ul className={classes.Process}>

                <li className={[classes.Phase, classes.Active].join(' ')}>
                    شروع
                </li>
                <li className={[classes.Phase, classes.Active].join(' ')}>
                    معاونت
                </li>
                <li className={[classes.Phase, classes.Active].join(' ')}>
                    مشاوره
                </li>
                <li className={[classes.Phase].join(' ')}>
                    ارزیابی
                </li>
                <li className={classes.Phase}>
                    مدیریت
                </li>
                <li className={classes.Phase}>
                    حسابداری
                </li>
                <li className={classes.Phase}>
                    تکمیل پرونده
                </li>
                <li className={classes.Phase}>
                    انتخاب کلاس
                </li>
                <li className={classes.Phase}>
                    پایان
                </li>

            </ul>
            <div className={classes.Content}>
                <h2>مراحل پیش ثبت نام</h2>
                <p>1 - پر کردن دقیق فرم های : مشخصات ، پزشکی و ورزشی ، ارائه رضایت نامه ، مطالعه آئین نامه</p>
                <p>2 - مراجعه به معاونت جهت دریافت و امضای فرمهای ثبت نام در زمان اعلام از طرف مدرسه</p>
                <p>3 - مراجعه به مشاور</p>
                <p>4 - مراجعه بخش ارزیابی</p>
                <p>5 - مراجعه به مدیریت</p>
                <p>6 - مراجعه به حسابداری</p>
                <p>7 - بررسی تکمیل مدارک</p>
                <p>8 - انتخاب کلاس ( بعد از طی مراحل و تائید نهایی توسط مدیر مدرسه، منتظر شروع انتخاب کلاس باشید )</p>
                <p>9 - پایان</p>
                <p className={classes.Warning}><span>تذکر مهم: </span>  
                خواهشمند است در زمان وارد کردن اطلاعات، دقت کافی داشته باشید، بدیهی است عواقب ورود اشتباه اطلاعات بر عهده ثبت نام کننده می باشد.</p>
            </div>
            <div className={classes.Controls}>
                <ButtonOne onClick={props.next}>مرحله بعد</ButtonOne>
                <ButtonOne onClick={props.prev}>مرحله قبل</ButtonOne>
            </div>
        </div>
    )
}

export default Preview;