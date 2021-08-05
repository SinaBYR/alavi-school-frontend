import classes from './FinalStage.module.css';
import { useEffect, useState } from 'react';
import HThree from '../../../Utility/UI/Headings/HThree/HThree';
// import { Calendar, DatePicker } from 'fixed-persian-datepicker';
// import styles from "fixed-persian-datepicker/lib/styles/basic.css";
import { AkbariDatePicker } from 'akbari-react-date-picker'
import 'akbari-react-date-picker/dist/index.css'
import DownloadLink from '../../../Utility/UI/DownloadLink/DownloadLink';
import { FaRegFilePdf } from 'react-icons/fa';
// import { withFormik } from 'formik';

const SCHOOL_IDENTIFIERS = {
    1: 'دبستان میدان ساعت',
    2: 'دبستان ویلاشهر',
    3: 'دبیرستان دوره اول'
}

const FinalStage = props => {
    const [studentImage, setStudentImage] = useState(null);
    const schoolBranch = SCHOOL_IDENTIFIERS[localStorage.getItem('branch')];

    const schoolBranchRadioButtons = Object.keys(SCHOOL_IDENTIFIERS).map(branch => {
        return (
            <div className={classes.Radio} tabIndex="0" key={branch}>
                <label>{SCHOOL_IDENTIFIERS[branch]}</label>
                <input
                    type="radio"
                    name="school-branch-to-register"
                    value={branch}
                    defaultChecked={schoolBranch === SCHOOL_IDENTIFIERS[branch]}
                    disabled={schoolBranch !== SCHOOL_IDENTIFIERS[branch]}/>
                <div className={classes.FakeRadio}></div>
            </div>
        )
    })

    const studentImageHanler = e => {
        console.log(e);
        const [file] = e.target.files;
        if(file) {
            setStudentImage(URL.createObjectURL(file));
        }
    }

    useEffect(() => {

    })

    let gradesOptions;
    if(schoolBranch === 'دبستان ویلاشهر' || schoolBranch === 'دبستان میدان ساعت') {
        gradesOptions = (
            <>
                <option>اول</option>
                <option>دوم</option>
                <option>سوم</option>
                <option>چهارم</option>
                <option>پنجم</option>
                <option>ششم</option>
            </>
        )
    } else {
        gradesOptions = (
            <>
                <option>هفتم</option>
                <option>هشتم</option>
                <option>نهم</option>
            </>
        )
    }

    return (
        <div className={classes.FinalStage}>
            <div className={classes.Wrapper}>
                <HThree style={{textAlign: 'center', marginBottom: '32px'}}>پیش ثبت نام</HThree>
                <form>
                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>اطلاعات مدرسه</h3>
                        </div>
                        <div className={classes.School}>

                            <div className={classes.SchoolItem}>
                                شعبه مدرسه
                                <div className={classes.SchoolBranchGroup}>
                                    {schoolBranchRadioButtons}
                                </div>
                            </div>

                            <div className={classes.SchoolItem}>
                                پایه تحصیلی
                                <div className={classes.Info}>
                                    <select className={classes.Select}>
                                        {gradesOptions}
                                    </select>
                                </div>
                            </div>

                            <div className={classes.SchoolItem}>
                                سال تحصیلی
                                <div className={classes.Info}>
                                    01 - 1400
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>مشخصات دانش آموز</h3>
                        </div>
                        <div className={classes.Student}>

                            <div className={classes.InputWrapper}>
                                <label>نام</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>نام خانوادگی</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>کدملی</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>سریال شناسنامه</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>محل تولد</label>
                                <input type="text"/>
                            </div>
                            
                            <div className={classes.InputWrapper}>
                                <label>تاریخ تولد</label>
                                <div className={classes.DatePicker}>
                                    <AkbariDatePicker 
                                        input_type={'jalali'} 
                                        // on_change_date={(date) => on_change_date(date)} 
                                        current_date={'1400/1/1'}
                                        min_date={'1300/8/5'}
                                        max_date={'1400/5/9'} 
                                        // ref={ref}
                                        // width="200px"
                                        height="50px"
                                        theme='light'
                                    />
                                </div>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>نام مدرسه فعلی</label>
                                <input type="text" />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شماره موبایل دانش آموز</label>
                                <input type="text" />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تصویر دانش آموز</label>
                                <input type="file" accept="image/png, image/gif, image/jpeg" onChange={studentImageHanler}/>
                            </div>
                            <div className={classes.Preview}>
                                {studentImage && <img src={studentImage} alt="student-image"/>}
                            </div>

                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>مشخصات پدر</h3>
                        </div>
                        <div className={classes.Father}>
                            <div className={classes.InputWrapper}>
                                <label>نام و نام خانوادگی</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>کدملی</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>محل تولد</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>مدرک تحصیلی</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شغل (به طور دقیق)</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>آدرس محل کار</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تلفن محل کار</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شماره موبایل (بدون صفر)</label>
                                <input type="text" placeholder="9141234567"/>
                            </div>
                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>مشخصات مادر</h3>
                        </div>
                        <div className={classes.Mother}>
                            <div className={classes.InputWrapper}>
                                <label>نام و نام خانوادگی</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>کدملی</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>محل تولد</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>مدرک تحصیلی</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شغل (به طور دقیق)</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>آدرس محل کار</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تلفن محل کار</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شماره موبایل (بدون صفر)</label>
                                <input type="text" placeholder="9141234567"/>
                            </div>
                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>مشخصات خانواده</h3>
                        </div>
                        <div className={classes.Family}>
                            <div className={classes.InputWrapper}>
                                <label>آدرس منزل</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تلفن ثابت منزل</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تلفن آشنای نزدیک</label>
                                <input type="text"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>دانش آموز با چه کسی زندگی میکند؟</label>
                                <div className={classes.LivingGroup}>
                                    <div className={classes.Radio} tabIndex="0">
                                        <label htmlFor="both">پدر و مادر</label>
                                        <input type="radio" id="both" name="living-with" value="پدر و مادر"/>
                                        <div className={classes.FakeRadio}></div>
                                    </div>
                                    <div className={classes.Radio} tabIndex="0">
                                        <label htmlFor="father">پدر</label>
                                        <input type="radio" id="father" name="living-with" value="پدر"/>
                                        <div className={classes.FakeRadio}></div>
                                    </div>
                                    <div className={classes.Radio} tabIndex="0">
                                        <label htmlFor="mother">مادر</label>
                                        <input type="radio" id="mother" name="living-with" value="مادر"/>
                                        <div className={classes.FakeRadio}></div>
                                    </div>
                                    <div className={classes.Radio} tabIndex="0">
                                        <label htmlFor="other">سایر</label>
                                        <input type="radio" id="other" name="living-with" value="سایر"/>
                                        <div className={classes.FakeRadio}></div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={classes.Section}>

                        <div className={classes.Heading}>
                            <h3>اطلاعات پزشکی</h3>
                        </div>
                        <p style={{maxWidth: '980px', margin: '0 auto', textAlign: 'justify'}}>خواهشمند است با دقت و صدافت، فرم ذیل را تکمیل فرمایید.بدیهی است مسئولیت صحت و سقم اطلاعات و اظهارات ذیل و حوادث ناشی از عدم اطلاع رسانی کامل و صحیح، برعهده اولیای دانش آموز می باشد.</p>
                        <div className={classes.Medical}>

                            <div className={classes.InputWrapper}>
                                <label>
                                    1- آیا تاکنون فرزندتان در بیمارستان بستری یا تحت عمل جراحی قرار گرفته است؟ در صورت مثبت بودن توضیح دهید.
                                </label>
                                {/* <input type="text" /> */}
                                <textarea className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    2- در صورتی که فرزندتان بیماری های قلبی، فشارخون، کم خونی، آسم، اعصاب یا موارد دیگر و یا سابقه بیماری دارد، به طور کامل بیان کنید.
                                </label>
                                {/* <input type="text" /> */}
                                <textarea className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    3- آیا فرزندتان داروی خاصی مصرف میکند؟ در صورت مثبت بودن، نام، مقدار و زمان مصرف دارو را اعلام کنید.
                                </label>
                                {/* <input type="text" /> */}
                                <textarea className={classes.Textarea} />
                            </div>

                        </div>
                        <p style={{textAlign: 'center', marginTop: '16px'}}>یادآوری: در صورت مثبت بودن پاسخ موارد فوق، ارائه گواهی معتبر پزشکی الزامی است.</p>
                    </div>

                    <div className={classes.Section}>

                        <div className={classes.Heading}>
                            <h3>اطلاعات ورزشی</h3>
                        </div>

                        <div className={classes.Athletic}>

                            <div className={classes.InputWrapper}>
                                <label>
                                    1- در صورت نقص عضو، آسیب جسمانی و یا هرگونه عارضه که فرزندتان را از انجام فعالیت بدنی و ورزشی باز می دارد، بیان کنید.
                                </label>
                                {/* <input type="text" /> */}
                                <textarea className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    2- آیا فرزندتان تاکنون عضو تیم مدرسه یا باشگاه ورزشی بوده یا هست؟ رشته ورزشی و تاریخ عضویت؟
                                </label>
                                {/* <input type="text" /> */}
                                <textarea className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    3- آیا فرزندتان تاکنون در مسابقات ورزشی شرکت کرده اند؟ در چه رشته ای و در چه سطحی؟
                                </label>
                                {/* <input type="text" /> */}
                                <textarea className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    4- آیا فرزندتان خارج از مدرسه تمرینات ورزشی خاصی دارند؟ چه تمریناتی و چند جلسه در هفته؟
                                </label>
                                {/* <input type="text" /> */}
                                <textarea className={classes.Textarea} />
                            </div>

                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>سایر اطلاعات</h3>
                        </div>
                        <div className={classes.More}>

                            <div className={classes.InputWrapper} style={{display: 'grid', gridTemplateColumns: '3fr 30px', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#dfdfdf', padding: '0.5rem', borderRadius: '5px'}}>
                                <label>از سرویس استفاده خواهیم کرد.</label>
                                <div className={classes.Checkbox}>
                                    <input type="checkbox" value="yes"/>
                                    <div className={classes.FakeCheckbox}>
                                        <i>✓</i>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.InputWrapper} style={{display: 'grid', gridTemplateColumns: '3fr 30px', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#dfdfdf', padding: '0.5rem', borderRadius: '5px'}}>
                                <label>فرزندم چپ دست است.</label>
                                <div className={classes.Checkbox}>
                                    <input type="checkbox" value="yes"/>
                                    <div className={classes.FakeCheckbox}>
                                        <i>✓</i>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.InputWrapper} style={{display: 'grid', gridTemplateColumns: '3fr 30px', gridColumn: '2 span/3', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#dfdfdf', padding: '0.5rem', borderRadius: '5px'}}>
                                <label>با اعزام فرزندم به کلیه بازدیدها و اردوهای مقرر از طرف مدرسه موافقم.</label>
                                <div className={classes.Checkbox}>
                                    <input type="checkbox" value="yes"/>
                                    <div className={classes.FakeCheckbox}>
                                        <i>✓</i>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>فرم ها و تعهدنامه ها</h3>
                        </div>
                        <div className={classes.PDFForms}>
                            <div className={classes.PDF}>
                                <div className={classes.DownloadTitle}>
                                    <FaRegFilePdf />
                                    اطلاعات پزشکی
                                </div>
                                <DownloadLink href="#">دریافت</DownloadLink>
                            </div>
                            
                            <div className={classes.PDF}>
                                <div className={classes.DownloadTitle}>
                                    <FaRegFilePdf />
                                    تعهدنامه اولیا
                                </div>
                                <DownloadLink href="#">دریافت</DownloadLink>
                            </div>

                            <div className={classes.PDF}>
                                <div className={classes.DownloadTitle}>
                                    <FaRegFilePdf />
                                    رضایت نامه سرویس
                                </div>
                                <DownloadLink href="#">دریافت</DownloadLink>
                            </div>

                            <div className={classes.PDF}>
                                <div className={classes.DownloadTitle}>
                                    <FaRegFilePdf />
                                    قرارداد سرویس
                                </div>
                                <DownloadLink href="#">دریافت</DownloadLink>
                            </div>

                            <div className={classes.PDF}>
                                <div className={classes.DownloadTitle}>
                                    <FaRegFilePdf />
                                    رضایت نامه
                                </div>
                                <DownloadLink href="#">دریافت</DownloadLink>
                            </div>

                            <div className={classes.PDF}>
                                <div className={classes.DownloadTitle}>
                                    <FaRegFilePdf />
                                    فرم ورزشی
                                <DownloadLink href="#">دریافت</DownloadLink>
                                </div>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

// const options = {
//     mapPropsToValues() {
//         return {

//         }
//     }
// }

// const FormikFinalStage = withFormik(options)(FinalStage);

export default FinalStage;