import classes from './FinalStage.module.css';
import { useEffect, useState } from 'react';
import HThree from '../../../../Utility/UI/Headings/HThree/HThree';
import { AkbariDatePicker } from 'akbari-react-date-picker'
import 'akbari-react-date-picker/dist/index.css'
import DownloadLink from '../../../../Utility/UI/DownloadLink/DownloadLink';
import { FaRegFilePdf } from 'react-icons/fa';
import { Field, Form, withFormik } from 'formik';
import { Input } from '../../../../Utility/Inputs/index';
import * as yup from 'yup';

const SCHOOL_IDENTIFIERS = {
    1: 'دبستان میدان ساعت',
    2: 'دبستان ویلاشهر',
    3: 'دبیرستان دوره اول'
}

const FinalStage = ({handleChange, values, errors, touched}) => {
    const [studentPhoto, setStudentPhoto] = useState(null);
    const [studentPhotoError, setStudentPhotoError] = useState(null);
    const [studentBirthdate, setStudentBirthdate] = useState('');
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

    const studentPhotoHanler = e => {
        setStudentPhotoError(null);
        // console.log(e);
        const [file] = e.target.files;
        if(!file) {
            return;
        }
        if(file && !(file.type === 'image/png' || file.type === 'image/jpeg' || file.type === 'image/jpeg')) {
            return setStudentPhotoError('تصویر دانش آموز نامعتبر است');
        }

        if(file && file.size > 5000000 ) {
            return setStudentPhotoError('حجم تصویر باید کمتر از 5 مگابایت باشد');
        }

        setStudentPhoto(URL.createObjectURL(file));
    }

    const submitFormHandler = (e) => {
        e.preventDefault();

        const formValues = {
            ...values,
            student: {
                ...values.student,
                birthdate: studentBirthdate,
                photo: studentPhoto
            }
        }
        console.log(formValues);

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

                            <Input
                                label="نام"
                                type="text"
                                name="student.firstName"
                                error={touched.student?.firstName && errors.student?.firstName}/>
                            <Input
                                label="نام خانوادگی"
                                type="text"
                                name="student.lastName"
                                error={touched.student?.lastName && errors.student?.lastName}/>
                            <Input
                                label="کدملی"
                                type="text"
                                name="student.code"
                                error={touched.student?.code && errors.student?.code}/>
                            <Input
                                label="سریال شناسنامه"
                                type="text"
                                name="student.serial"
                                error={touched.student?.serial && errors.student?.serial}/>
                            <Input
                                label="محل تولد"
                                type="text"
                                name="student.birthplace"
                                error={touched.student?.birthplace && errors.student?.birthplace}/>
                            <div className={classes.InputWrapper}>
                                <p>{touched.student?.birthdate && errors.student?.birthdate}</p>
                                <label>تاریخ تولد</label>
                                <div className={classes.DatePicker}>
                                    <AkbariDatePicker 
                                        input_type={'jalali'} 
                                        on_change_date={(date) => setStudentBirthdate(date)} 
                                        current_date={'1400/1/1'}
                                        min_date={'1380/1/1'}
                                        max_date={'1400/1/1'} 
                                        // ref="student.birthdate"
                                        // width="200px"
                                        height="50px"
                                        theme='light'
                                    />
                                </div>
                            </div>
                            <Input
                                label="نام مدرسه فعلی"
                                type="text"
                                name="student.currentSchoolName"
                                error={touched.student?.currentSchoolName && errors.student?.currentSchoolName}/>   
                            <Input
                                label="شماره موبایل دانش آموز"
                                type="text"
                                name="student.phoneNumber"
                                error={touched.student?.phoneNumber && errors.student?.phoneNumber}/>
                            <Input
                                label="تصویر دانش آموز"
                                type="file"
                                name="student.photo"
                                accept="image/png, image/jpeg"
                                error={studentPhotoError}
                                inputConfig={{onChange: studentPhotoHanler}} />
                            <div className={classes.Preview}>
                                <div className={classes.PreviewPhoto}>
                                    {studentPhoto && <img src={studentPhoto} alt="student-image"/>}
                                </div>
                                <div className={classes.PreviewHint}>
                                    <p>فرمت تصاویر باید JPEG یا PNG باشد.</p>
                                    <p>حجم تصویر حداکثر باید 5 مگابایت باشد.</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>مشخصات پدر</h3>
                        </div>
                        <div className={classes.Father}>

                            <Input label="نام و نام خانوادگی" type="text" name="father.fullName"/>
                            <Input label="کدملی" type="text" name="father.code"/>
                            <Input label="محل تولد" type="text" name="father.birthplace"/>
                            <Input label="مدرک تحصیلی" type="text" name="father.education"/>
                            <Input label="شغل (به طور دقیق)" type="text" name="father.profession"/>
                            <Input label="آدرس محل کار" type="text" name="father.workplaceAddress"/>
                            <Input label="تلفن محل کار" type="text" name="father.workplacePhoneNumber"/>
                            <Input label="شماره موبایل (بدون صفر)" type="text" name="father.phoneNumber" inputConfig={{placeholder: "9141234567"}}/>

                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>مشخصات مادر</h3>
                        </div>
                        <div className={classes.Mother}>

                            <Input label="نام و نام خانوادگی" type="text" name="mother.fullName"/>
                            <Input label="کدملی" type="text" name="mother.code"/>
                            <Input label="محل تولد" type="text" name="mother.birthplace"/>
                            <Input label="مدرک تحصیلی" type="text" name="mother.education"/>
                            <Input label="شغل (به طور دقیق)" type="text" name="mother.profession"/>
                            <Input label="آدرس محل کار" type="text" name="mother.workplaceAddress"/>
                            <Input label="تلفن محل کار" type="text" name="mother.workplacePhoneNumber"/>
                            <Input label="شماره موبایل (بدون صفر)" type="text" name="mother.phoneNumber" inputConfig={{placeholder: "9141234567"}}/>

                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>مشخصات خانواده</h3>
                        </div>
                        <div className={classes.Family}>

                            <Input label="آدرس منزل" type="text" name="family.address"/>
                            <Input label="تلفن ثابت منزل" type="text" name="family.phoneNumber"/>
                            <Input label="تلفن آشنای نزدیک" type="text" name="family.closeIndividualPhoneNumber"/>
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

                            <Input
                                label=" 1- آیا تاکنون فرزندتان در بیمارستان بستری یا تحت عمل جراحی قرار گرفته است؟ در صورت مثبت بودن توضیح دهید."
                                type="textarea"
                                name="medical.q1"
                                />
                            <Input
                                label="2- در صورتی که فرزندتان بیماری های قلبی، فشارخون، کم خونی، آسم، اعصاب یا موارد دیگر و یا سابقه بیماری دارد، به طور کامل بیان کنید."
                                type="textarea"
                                name="medical.q2"
                                />
                            <Input
                                label="3- آیا فرزندتان داروی خاصی مصرف میکند؟ در صورت مثبت بودن، نام، مقدار و زمان مصرف دارو را اعلام کنید."
                                type="textarea"
                                name="medical.q3"
                                />

                        </div>
                        <p style={{textAlign: 'center', marginTop: '16px'}}>یادآوری: در صورت مثبت بودن پاسخ موارد فوق، ارائه گواهی معتبر پزشکی الزامی است.</p>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>اطلاعات ورزشی</h3>
                        </div>
                        <div className={classes.Athletic}>

                            <Input
                                label="1- در صورت نقص عضو، آسیب جسمانی و یا هرگونه عارضه که فرزندتان را از انجام فعالیت بدنی و ورزشی باز می دارد، بیان کنید."
                                type="textarea"
                                name="athletic.q1"
                                />
                            <Input
                                label="2- آیا فرزندتان تاکنون عضو تیم مدرسه یا باشگاه ورزشی بوده یا هست؟ رشته ورزشی و تاریخ عضویت؟"
                                type="textarea"
                                name="athletic.q2"
                                />
                            <Input
                                label="3- آیا فرزندتان تاکنون در مسابقات ورزشی شرکت کرده اند؟ در چه رشته ای و در چه سطحی؟"
                                type="textarea"
                                name="athletic.q3"
                                />
                            <Input
                                label="4- آیا فرزندتان خارج از مدرسه تمرینات ورزشی خاصی دارند؟ چه تمریناتی و چند جلسه در هفته؟"
                                type="textarea"
                                name="athletic.q4"
                                />

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
    validationSchema: yup.object().shape({
        // school: {
        //     branch: SCHOOL_IDENTIFIERS[localStorage.getItem('branch')],
        //     grade: '',
        // },
        student: yup.object().shape({
            firstName: yup.string().required('تکمیل این فیلد الزامی است'),
            lastName: yup.string().required('تکمیل این فیلد الزامی است'),
            code: yup.number()
                .typeError('کدملی نامعتبر است')
                .required('تکمیل این فیلد الزامی است')
                .test('length', 'کدملی باید 10 رقم باشد', val => val?.toString().length === 10),
            serial: yup.string().required('تکمیل این فیلد الزامی است'),
            birthplace: yup.string().required('تکمیل این فیلد الزامی است'),
            currentSchoolName: yup.string().required('تکمیل این فیلد الزامی است'),
            phoneNumber: yup.string()
                        .required('تکمیل این فیلد الزامی است')
                        .test('onlynum', 'شماره موبایل نامعتبر است', val => {
                            if(!val) {return}
                            if(isNaN(val)) {
                                return false;
                            }
                            return true;
                        })
                        .test('length', 'شماره موبایل باید 11 رقم باشد', val => val?.length === 11)
        }),
        // father: {
        //     fullName: '',
        //     code: '',
        //     birthplace: '',
        //     education: '',
        //     profession: '',
        //     workplaceAddress: '',
        //     workplacePhoneNumber: '',
        //     phoneNumber: ''
        // },
        // mother: {
        //     fullName: '',
        //     code: '',
        //     birthplace: '',
        //     education: '',
        //     profession: '',
        //     workplaceAddress: '',
        //     workplacePhoneNumber: '',
        //     phoneNumber: ''
        // },
        // family: {
        //     address: '',
        //     phoneNumber: '',
        //     closeIndividualPhoneNumber: '',
        //     livingWith: ''
        // },
        // medical: {
        //     q1: '',
        //     q2: '',
        //     q3: ''
        // },
        // athletic: {
        //     q1: '',
        //     q2: '',
        //     q3: '',
        //     q4: ''
        // },
        // more: {
        //     willUseService: false,
        //     leftHanded: false,
        //     agreementsOnGoingToCamps: false
        // }
    }),
    handleSubmit(values) {
        // console.log(values);
    }
}

const FormikFinalStage = withFormik(options)(FinalStage);

export default FormikFinalStage;