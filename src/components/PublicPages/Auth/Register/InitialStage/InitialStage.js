import classes from './InitialStage.module.css';
import { useEffect } from 'react';
import { ButtonOne } from '../../../../Utility/UI';
const InitialStage = props => {

    let classNames = [classes.InitialStage]
    useEffect(() => {
        classNames.push(classes.Open);
        return () => {
            classNames.pop();
        }
    })

    return (
        <div className={classNames.join(' ')}>
            <div className={classes.Headings}>
                <h1>بسم تعالی</h1>
                <h1>راهنمای پیش ثبت نام دانش آموزان مجتمع آموزشی علوی تبریز</h1>
                <h4>تاریخ به روز رسانی : 10 تیر 1399</h4>
            </div>
            <div className={classes.Content}>
                <p style={{maxWidth: '980px', margin: '0 auto', textAlign: 'center'}}>با سلام و عرض خیر مقدم و آرزوی سلامت و توفیق، توجه به نکات ضروری ذیل را تاکید نموده، تقاضا دارد قبل از تکمیل فرم پیش ثبت نام، موارد زیر را کاملا مدنظر قرار دهید:</p>

                <h2>1. شرایط پذیرش</h2>
                <div className={classes.OuterDiv}>
                    <p>1. شرط سنی دانش آموز: طبق قوانین ابلاغی آموزش و پرورش</p>
                    <p>2. انجام مصاحبه ورودی</p>
                </div>

                <h2>2. مراحل ثبت نام:</h2>
                <div className={classes.OuterDiv}>
                    <h3>گام اول&#41; پیش ثبت نام اینترنتی</h3>
                    <div className={classes.InnerDiv}>
                        <p>1. ورود به سامانه اینترنتی پیش ثبت نام به آدرس https://www.Bonyantabriz.ir</p>
                        <p>2. پرکردن فرم اینترنتی پیش ثبت نام</p>
                    </div>
                </div>
                <div className={classes.OuterDiv}>
                    <h3>گام دوم&#41; مصاحبه حضوری</h3>
                    <div className={classes.InnerDiv}>
                        <p>1. پس از تکمیل فرم اینترنتی پیش ثبت نام، زمان مصاحبه از طرف مدرسه اعلام خواهد شد.</p>
                        <p>2. حضور پدر، مادر و دانش آموز در زمان مصاحبه، الزامی است.</p>
                        <p>3. همراه داشتن شناسنامه دانش آموز ، پدر و مادر در روز مصاحبه، الزامی است.</p>
                        <p>4. عدم حضور در مصاحبه به منزله انصراف تلقی خواهد شد.</p>
                        <p>5. در صورت نامساعد بودن وضعیت جسمی و روحی دانش آموز در روز مصاحبه ، حتما قبل از تشریف فرمایی، مراتب را با روابط عمومی مجتمع درمیان بگذارید و وقت جایگزین دریافت نمایید.</p>
                    </div>
                </div>
                <div className={classes.OuterDiv}>
                    <h3>گام سوم&#41; ثبت نام مالی</h3>
                    <div className={classes.InnerDiv}>
                        <p>همراه داشتن مدارک ذیل مورد نیاز است:</p>
                        <p>1. کپی شناسنامه و کارت ملی پدر و مادر.</p>
                        <p>2. کپی شناسنامه دانش آموز.</p>
                        <p>3. دو قطعه عکس رنگی جدید.</p>
                        <p>4. فیش واریزی پیش پرداخت و یا کارت بانکی.</p>
                        <p>5. دسته چک جهت پرداخت الباقی شهریه</p>
                    </div>
                </div>

                <p style={{textAlign: 'center', margin: '3rem 0'}}>پس از مطالعه‌ی موارد فوق روی دکمه <span style={{color: '#ffb62d'}}>« شروع ثبت نام »</span> کلیک فرمایید.</p>
            </div>
            <div className={classes.Controls}>
                <ButtonOne onClick={props.next}>شروع ثبت نام</ButtonOne>
            </div>
        </div>
    )
}

export { InitialStage }