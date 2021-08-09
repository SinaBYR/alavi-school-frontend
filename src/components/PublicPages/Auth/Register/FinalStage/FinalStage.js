import classes from './FinalStage.module.css';
import { useEffect, useState } from 'react';
import HThree from '../../../../Utility/UI/Headings/HThree/HThree';
// import { Calendar, DatePicker } from 'fixed-persian-datepicker';
// import styles from "fixed-persian-datepicker/lib/styles/basic.css";
import { AkbariDatePicker } from 'akbari-react-date-picker'
import 'akbari-react-date-picker/dist/index.css'
import DownloadLink from '../../../../Utility/UI/DownloadLink/DownloadLink';
import { FaRegFilePdf } from 'react-icons/fa';
import { Field, Form, withFormik } from 'formik';
import * as yup from 'yup';

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

    const submitFormHandler = (e) => {
        e.preventDefault();

        const values = props.values;
        values.student.photo = studentImage;
        const data = {
            ...props.values,
        }
        console.log(data);
    }

    let gradesOptions;
    if(schoolBranch === 'دبستان ویلاشهر' || schoolBranch === 'دبستان میدان ساعت') {
        gradesOptions = (
            <>
                <option value="اول">اول</option>
                <option value="دوم">دوم</option>
                <option value="سوم">سوم</option>
                <option value="چهارم">چهارم</option>
                <option value="پنجم">پنجم</option>
                <option value="ششم">ششم</option>
            </>
        )
    } else {
        gradesOptions = (
            <>
                <option value="هفتم">هفتم</option>
                <option value="هشتم">هشتم</option>
                <option value="نهم">نهم</option>
            </>
        )
    }

    return (
        <div className={classes.FinalStage}>
            <div className={classes.Wrapper}>
                <HThree style={{textAlign: 'center', marginBottom: '32px'}}>پیش ثبت نام</HThree>
                <Form onSubmit={submitFormHandler}>
                    
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
                                    <Field as="select" className={classes.Select} name="school.grade">
                                        {gradesOptions}
                                    </Field>
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
                                <Field type="text" name="student.firstName"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>نام خانوادگی</label>
                                <Field type="text" name="student.lastName"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>کدملی</label>
                                <Field type="text" name="student.code"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>سریال شناسنامه</label>
                                <Field type="text" name="student.serial"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>محل تولد</label>
                                <Field type="text" name="student.birthplace"/>
                            </div>
                            
                            <div className={classes.InputWrapper}>
                                <label>تاریخ تولد</label>
                                <div className={classes.DatePicker}>
                                    <AkbariDatePicker 
                                        input_type={'jalali'} 
                                        on_change_date={props.handleChange} 
                                        current_date={'1400/1/1'}
                                        min_date={'1300/8/5'}
                                        max_date={'1400/5/9'} 
                                        // ref="student.birthdate"
                                        // width="200px"
                                        height="50px"
                                        theme='light'
                                    />
                                </div>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>نام مدرسه فعلی</label>
                                <Field type="text" name="student.currentSchoolName"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شماره موبایل دانش آموز</label>
                                <Field type="text" name="phoneNumber"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تصویر دانش آموز</label>
                                <input type="file" accept="image/png, image/gif, image/jpeg" onChange={studentImageHanler} />
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
                                <Field type="text" name="father.fullName"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>کدملی</label>
                                <Field type="text" name="father.code"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>محل تولد</label>
                                <Field type="text" name="father.birthplace"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>مدرک تحصیلی</label>
                                <Field type="text" name="father.education"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شغل (به طور دقیق)</label>
                                <Field type="text" name="father.profession"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>آدرس محل کار</label>
                                <Field type="text" name="father.workplaceAddress"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تلفن محل کار</label>
                                <Field type="text" name="father.workplacePhoneNumber"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شماره موبایل (بدون صفر)</label>
                                <Field type="text" name="father.phoneNumber" placeholder="9141234567"/>
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
                                <Field type="text" name="mother.fullName"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>کدملی</label>
                                <Field type="text" name="mother.code"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>محل تولد</label>
                                <Field type="text" name="mother.birthplace"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>مدرک تحصیلی</label>
                                <Field type="text" name="mother.education"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شغل (به طور دقیق)</label>
                                <Field type="text" name="mother.profession"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>آدرس محل کار</label>
                                <Field type="text" name="mother.workplaceAddress"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تلفن محل کار</label>
                                <Field type="text" name="mother.workplacePhoneNumber"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>شماره موبایل (بدون صفر)</label>
                                <Field type="text" name="mother.phoneNumber" placeholder="9141234567"/>
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
                                <Field type="text" name="family.address"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تلفن ثابت منزل</label>
                                <Field type="text" name="family.phoneNumber"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>تلفن آشنای نزدیک</label>
                                <Field type="text" name="closeIndividualPhoneNumber"/>
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>دانش آموز با چه کسی زندگی میکند؟</label>
                                <div className={classes.LivingGroup}>
                                    <div className={classes.Radio} tabIndex="0">
                                        <label htmlFor="both">پدر و مادر</label>
                                        <Field type="radio" id="both" name="family.livingWith" value="پدر و مادر"/>
                                        <div className={classes.FakeRadio}></div>
                                    </div>
                                    <div className={classes.Radio} tabIndex="0">
                                        <label htmlFor="father">پدر</label>
                                        <Field type="radio" id="father" name="family.livingWith" value="پدر"/>
                                        <div className={classes.FakeRadio}></div>
                                    </div>
                                    <div className={classes.Radio} tabIndex="0">
                                        <label htmlFor="mother">مادر</label>
                                        <Field type="radio" id="mother" name="family.livingWith" value="مادر"/>
                                        <div className={classes.FakeRadio}></div>
                                    </div>
                                    <div className={classes.Radio} tabIndex="0">
                                        <label htmlFor="other">سایر</label>
                                        <Field type="radio" id="other" name="family.livingWith" value="سایر"/>
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
                                <Field as="textarea" name="medical.q1" className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    2- در صورتی که فرزندتان بیماری های قلبی، فشارخون، کم خونی، آسم، اعصاب یا موارد دیگر و یا سابقه بیماری دارد، به طور کامل بیان کنید.
                                </label>
                                {/* <input type="text" /> */}
                                <Field as="textarea" name="medical.q2" className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    3- آیا فرزندتان داروی خاصی مصرف میکند؟ در صورت مثبت بودن، نام، مقدار و زمان مصرف دارو را اعلام کنید.
                                </label>
                                {/* <input type="text" /> */}
                                <Field as="textarea" name="medical.q3" className={classes.Textarea} />
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
                                <Field as="textarea" name="athletic.q1" className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    2- آیا فرزندتان تاکنون عضو تیم مدرسه یا باشگاه ورزشی بوده یا هست؟ رشته ورزشی و تاریخ عضویت؟
                                </label>
                                {/* <input type="text" /> */}
                                <Field as="textarea" name="athletic.q2" className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    3- آیا فرزندتان تاکنون در مسابقات ورزشی شرکت کرده اند؟ در چه رشته ای و در چه سطحی؟
                                </label>
                                {/* <input type="text" /> */}
                                <Field as="textarea" name="athletic.q3" className={classes.Textarea} />
                            </div>

                            <div className={classes.InputWrapper}>
                                <label>
                                    4- آیا فرزندتان خارج از مدرسه تمرینات ورزشی خاصی دارند؟ چه تمریناتی و چند جلسه در هفته؟
                                </label>
                                {/* <input type="text" /> */}
                                <Field as="textarea" name="athletic.q4" className={classes.Textarea} />
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
                                    <Field type="checkbox" name="more.willUseService"/>
                                    <div className={classes.FakeCheckbox}>
                                        <i>✓</i>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.InputWrapper} style={{display: 'grid', gridTemplateColumns: '3fr 30px', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#dfdfdf', padding: '0.5rem', borderRadius: '5px'}}>
                                <label>فرزندم چپ دست است.</label>
                                <div className={classes.Checkbox}>
                                    <Field type="checkbox" name="more.leftHanded"/>
                                    <div className={classes.FakeCheckbox}>
                                        <i>✓</i>
                                    </div>
                                </div>
                            </div>

                            <div className={classes.InputWrapper} style={{display: 'grid', gridTemplateColumns: '3fr 30px', gridColumn: '2 span/3', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#dfdfdf', padding: '0.5rem', borderRadius: '5px'}}>
                                <label>با اعزام فرزندم به کلیه بازدیدها و اردوهای مقرر از طرف مدرسه موافقم.</label>
                                <div className={classes.Checkbox}>
                                    <Field type="checkbox" name="more.agreementsOnGoingToCamps"/>
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

                    <button>Submit</button>
                </Form>
            </div>
        </div>
    )
}

const options = {
    mapPropsToValues(props) {
        return {
            school: {
                branch: SCHOOL_IDENTIFIERS[localStorage.getItem('branch')],
                grade: '',
            },
            student: {
                firstName: '',
                lastName: '',
                code: '',
                serial: '',
                birthplace: '',
                birthdate: '',
                currentSchoolName: '',
                phoneNumber: '',
                photo: ''
            },
            father: {
                fullName: '',
                code: '',
                birthplace: '',
                education: '',
                profession: '',
                workplaceAddress: '',
                workplacePhoneNumber: '',
                phoneNumber: ''
            },
            mother: {
                fullName: '',
                code: '',
                birthplace: '',
                education: '',
                profession: '',
                workplaceAddress: '',
                workplacePhoneNumber: '',
                phoneNumber: ''
            },
            family: {
                address: '',
                phoneNumber: '',
                closeIndividualPhoneNumber: '',
                livingWith: ''
            },
            medical: {
                q1: '',
                q2: '',
                q3: ''
            },
            athletic: {
                q1: '',
                q2: '',
                q3: '',
                q4: ''
            },
            more: {
                willUseService: false,
                leftHanded: false,
                agreementsOnGoingToCamps: false
            }
        }
    },
    handleSubmit(values) {
        // console.log(values);
    }
}

const FormikFinalStage = withFormik(options)(FinalStage);

export default FormikFinalStage;