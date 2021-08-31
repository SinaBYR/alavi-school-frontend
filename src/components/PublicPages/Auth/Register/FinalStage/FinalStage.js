import * as yup from 'yup';
import classes from './FinalStage.module.css';
import 'akbari-react-date-picker/dist/index.css'
import { useEffect, useState } from 'react';
import { Input } from '../../../../Utility/Inputs/index';
import { HThree, DownloadLink, ButtonOne } from '../../../../Utility/UI';
import { AkbariDatePicker } from 'akbari-react-date-picker'
import { Field, Form, withFormik } from 'formik';
import { FaRegFilePdf } from 'react-icons/fa';

const SCHOOL_IDENTIFIERS = {
    1: 'دبستان میدان ساعت',
    2: 'دبستان ویلاشهر',
    3: 'دبیرستان دوره اول'
}

const FinalStage = ({values, errors, touched, setFieldValue, prev, getData, isValid, dirty, isValidating}) => {
    const [studentPhoto, setStudentPhoto] = useState(null);
    const [studentPhotoError, setStudentPhotoError] = useState(null);
    const [studentBirthdate, setStudentBirthdate] = useState('');
    const schoolBranch = SCHOOL_IDENTIFIERS[localStorage.getItem('branch')];
    
    const studentPhotoHanler = e => {
        setStudentPhotoError(null);
        setStudentPhoto(null);
        // console.log(e);
        const [file] = e.target.files;
        if(!file) {
            return;
        }
        if(file && !(file.type === 'image/png' || file.type === 'image/jpeg')) {
            return setStudentPhotoError('فایل آپلودشده باید تصویر باشد');
        }

        if(file && file.size > 5000000 ) {
            return setStudentPhotoError('حجم تصویر باید کمتر از 5 مگابایت باشد');
        }

        setStudentPhoto(URL.createObjectURL(file));
        return URL.createObjectURL(file)
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

    const branchesArray = Object.keys(SCHOOL_IDENTIFIERS).map(branch => {
        return {
            value: SCHOOL_IDENTIFIERS[branch],
            text: SCHOOL_IDENTIFIERS[branch],
            checked: SCHOOL_IDENTIFIERS[branch] === schoolBranch,
            disabled: SCHOOL_IDENTIFIERS[branch] !== schoolBranch
        }
    })

    let gradesOptions = [
        {value: 'هفتم', text: 'هفتم'},
        {value: 'هشتم', text: 'هشتم'},
        {value: 'نهم', text: 'هفتم'}
    ]
    if(schoolBranch === 'دبستان ویلاشهر' || schoolBranch === 'دبستان میدان ساعت') {
        gradesOptions = [
            {value: 'اول', text: 'اول'},
            {value: 'دوم', text: 'دوم'},
            {value: 'سوم', text: 'سوم'},
            {value: 'چهارم', text: 'چهارم'},
            {value: 'پنجم', text: 'پنجم'},
            {value: 'ششم', text: 'ششم'}
        ]
    }


    useEffect(() => {
        if(Object.keys(errors).length && isValidating) {
            console.log('an error caught!')
            window.scrollTo(0, 0);
            // errorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [errors])

    // console.log(touched);
    // console.log(errors);
    // console.log('touched: ', Object.keys(touched).length);
    // console.log('errors: ', Object.keys(errors).length);


    return (
        <div className={classes.FinalStage}>
            <div className={classes.Wrapper}>
                <HThree style={{textAlign: 'center', marginBottom: '32px'}}>پیش ثبت نام</HThree>
                <Form >
                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>اطلاعات مدرسه</h3>
                        </div>
                        <div className={classes.School}>

                            <div className={classes.SchoolItem}>
                                <Input
                                    label="شعبه مدرسه"
                                    type="radio"
                                    name="school.branch"
                                    groupClassName={classes.SchoolBranchGroup}
                                    elements={branchesArray}/>
                            </div>

                            <div className={classes.SchoolItem}>
                                پایه تحصیلی
                                <div className={classes.Info}>
                                    <Input
                                        type="select"
                                        name="school.grade"
                                        elements={gradesOptions}
                                        parentConfig={{style: {width: '100%'}}}/>
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
                                        on_change_date={(date) => setFieldValue('student.birthdate', date)} 
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
                                inputConfig={{onChange: e => setFieldValue('student.photo', studentPhotoHanler(e))}}
                                error={studentPhotoError || touched.student?.photo && errors.student?.photo} />
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

                            <Input
                                label="نام و نام خانوادگی"
                                type="text"
                                name="father.fullName"
                                error={touched.father?.fullName && errors.father?.fullName}/>
                            <Input
                                label="کدملی"
                                type="text"
                                name="father.code"
                                error={touched.father?.code && errors.father?.code}/>
                            <Input
                                label="محل تولد"
                                type="text"
                                name="father.birthplace"
                                error={touched.father?.birthplace && errors.father?.birthplace}/>
                            <Input
                                label="مدرک تحصیلی"
                                type="text"
                                name="father.education"
                                error={touched.father?.education && errors.father?.education}/>
                            <Input
                                label="شغل (به طور دقیق)"
                                type="text"
                                name="father.profession"
                                error={touched.father?.profession && errors.father?.profession}/>
                            <Input
                                label="آدرس محل کار"
                                type="text"
                                name="father.workplaceAddress"
                                error={touched.father?.workplaceAddress && errors.father?.workplaceAddress}/>
                            <Input
                                label="تلفن محل کار"
                                type="text"
                                name="father.workplacePhoneNumber"
                                error={touched.father?.workplacePhoneNumber && errors.father?.workplacePhoneNumber}/>
                            <Input
                                label="شماره موبایل"
                                type="text"
                                name="father.phoneNumber"
                                error={touched.father?.phoneNumber && errors.father?.phoneNumber}/>

                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>مشخصات مادر</h3>
                        </div>
                        <div className={classes.Mother}>

                        <Input
                                label="نام و نام خانوادگی"
                                type="text"
                                name="mother.fullName"
                                error={touched.mother?.fullName && errors.mother?.fullName}/>
                            <Input
                                label="کدملی"
                                type="text"
                                name="mother.code"
                                error={touched.mother?.code && errors.mother?.code}/>
                            <Input
                                label="محل تولد"
                                type="text"
                                name="mother.birthplace"
                                error={touched.mother?.birthplace && errors.mother?.birthplace}/>
                            <Input
                                label="مدرک تحصیلی"
                                type="text"
                                name="mother.education"
                                error={touched.mother?.education && errors.mother?.education}/>
                            <Input
                                label="شغل (به طور دقیق)"
                                type="text"
                                name="mother.profession"
                                error={touched.mother?.profession && errors.mother?.profession}/>
                            <Input
                                label="آدرس محل کار"
                                type="text"
                                name="mother.workplaceAddress"
                                error={touched.mother?.workplaceAddress && errors.mother?.workplaceAddress}/>
                            <Input
                                label="تلفن محل کار"
                                type="text"
                                name="mother.workplacePhoneNumber"
                                error={touched.mother?.workplacePhoneNumber && errors.mother?.workplacePhoneNumber}/>
                            <Input
                                label="شماره موبایل"
                                type="text"
                                name="mother.phoneNumber"
                                error={touched.mother?.phoneNumber && errors.mother?.phoneNumber}/>

                        </div>
                    </div>

                    <div className={classes.Section}>
                        <div className={classes.Heading}>
                            <h3>مشخصات خانواده</h3>
                        </div>
                        <div className={classes.Family}>

                            <Input
                                label="آدرس منزل"
                                type="text"
                                name="family.address"
                                error={touched.family?.address && errors.family?.address}/>
                            <Input
                                label="تلفن ثابت منزل"
                                type="text"
                                name="family.phoneNumber"
                                error={touched.family?.phoneNumber && errors.family?.phoneNumber}/>
                            <Input
                                label="تلفن آشنای نزدیک"
                                type="text"
                                name="family.closeIndividualPhoneNumber"
                                error={touched.family?.closeIndividualPhoneNumber && errors.family?.closeIndividualPhoneNumber}/>
                            <Input
                                label="دانش آموز با چه کسی زندگی میکند؟"
                                type="radio"
                                name="family.livingWith"
                                error={touched.family?.livingWith && errors.family?.livingWith}
                                groupClassName={classes.LivingGroup}
                                elements={[
                                    {value: 'پدر و مادر', text: 'پدر و مادر'},
                                    {value: 'پدر', text: 'پدر'},
                                    {value: 'مادر', text: 'مادر'},
                                    {value: 'سایر', text: 'سایر'},
                                ]}/>

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

                            <Input
                                type="checkbox"
                                name="more.willUseService"
                                label="از سرویس استفاده خواهیم کرد."
                                parentConfig={{style: {display: 'grid', gridTemplateColumns: '3fr 30px', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#dfdfdf', padding: '0.5rem', borderRadius: '5px'}}}/>

                            <Input
                                type="checkbox"
                                name="more.leftHanded"
                                label="فرزندم چپ دست است."
                                parentConfig={{style: {display: 'grid', gridTemplateColumns: '3fr 30px', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#dfdfdf', padding: '0.5rem', borderRadius: '5px'}}}/>

                            <Input
                                type="checkbox"
                                name="more.agreeWithSchoolCamps"
                                label="با اعزام فرزندم به کلیه بازدیدها و اردوهای مقرر از طرف مدرسه موافقم."
                                parentConfig={{style: {display: 'grid', gridTemplateColumns: '3fr 30px', gridColumn: '2 span/3', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#dfdfdf', padding: '0.5rem', borderRadius: '5px'}}}/>

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
                    
                    {/* <div className={classes.ErrorDisplay}></div> */}

                    <div className={classes.Controls}>
                        <div><ButtonOne type="submit" disabled={!(isValid && dirty)}>پیش ثبت نام</ButtonOne></div>
                        <ButtonOne type="button" onClick={prev}>مرحله قبل</ButtonOne>
                    </div>
                    <button type="submit">Submit</button>
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
                grade: localStorage.getItem('branch') === 3 ? 'هفتم' : 'اول'
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
                agreeWithSchoolCamps: false
            }
        }
    },
    validationSchema: yup.object().shape({
        student: yup.object().shape({
            firstName: yup.string().required('تکمیل این فیلد الزامی است'),
            lastName: yup.string().required('تکمیل این فیلد الزامی است'),
            code: yup.number()
                .typeError('کدملی نامعتبر است')
                .required('تکمیل این فیلد الزامی است')
                .test('student-length', 'کدملی باید 10 رقم باشد', val => val?.toString().length === 10),
            serial: yup.string().required('تکمیل این فیلد الزامی است'),
            birthplace: yup.string().required('تکمیل این فیلد الزامی است'),
            currentSchoolName: yup.string().required('تکمیل این فیلد الزامی است'),
            phoneNumber: yup.string()
                        .required('تکمیل این فیلد الزامی است')
                        .test('student-onlynum', 'شماره موبایل نامعتبر است', val => {
                            if(!val) {return}
                            if(isNaN(val)) {
                                return false;
                            }
                            return true;
                        })
                        .test('length', 'شماره موبایل باید 11 رقم باشد', val => val?.length === 11),
            photo: yup.mixed().required('ارسال تصویر دانش آموز الزامی است')
        }),
        father: yup.object().shape({
            fullName: yup.string().required('تکمیل این فیلد الزامی است'),
            code: yup.number()
                .typeError('کدملی نامعتبر است')
                .required('تکمیل این فیلد الزامی است')
                .test('father-code-length', 'کدملی باید 10 رقم باشد', val => val?.toString().length === 10),
            birthplace: yup.string().required('تکمیل این فیلد الزامی است'),
            education: yup.string().required('تکمیل این فیلد الزامی است'),
            profession: yup.string().required('تکمیل این فیلد الزامی است'),
            workplaceAddress: yup.string().required('تکمیل این فیلد الزامی است'),
            workplacePhoneNumber: yup.string()
                .required('تکمیل این فیلد الزامی است')
                .test('father-onlynum', 'شماره تلفن نامعتبر است', val => {
                    if(!val) {return}
                    if(isNaN(val)) {
                        return false;
                    }
                    return true;
                })
                .test('father-pn-length', 'شماره تلفن باید حداقل 8 رقم باشد', val => val?.length >= 8),
            phoneNumber: yup.string()
                .required('تکمیل این فیلد الزامی است')
                .test('father-onlynum-1', 'شماره موبایل نامعتبر است', val => {
                    if(!val) {return}
                    if(isNaN(val)) {
                        return false;
                    }
                    return true;
                })
                .test('father-pn1-length', 'شماره موبایل باید 11 رقم باشد', val => val?.length === 11)
        }),
        mother: yup.object().shape({
            fullName: yup.string().required('تکمیل این فیلد الزامی است'),
            code: yup.number()
                .typeError('کدملی نامعتبر است')
                .required('تکمیل این فیلد الزامی است')
                .test('mother-code-length', 'کدملی باید 10 رقم باشد', val => val?.toString().length === 10),
            birthplace: yup.string().required('تکمیل این فیلد الزامی است'),
            education: yup.string().required('تکمیل این فیلد الزامی است'),
            profession: yup.string().required('تکمیل این فیلد الزامی است'),
            workplaceAddress: yup.string().required('تکمیل این فیلد الزامی است'),
            workplacePhoneNumber: yup.string()
                .required('تکمیل این فیلد الزامی است')
                .test('mother-onlynum', 'شماره تلفن نامعتبر است', val => {
                    if(!val) {return}
                    if(isNaN(val)) {
                        return false;
                    }
                    return true;
                })
                .test('mother-pn-length', 'شماره تلفن باید حداقل 8 رقم باشد', val => val?.length >= 8),
            phoneNumber: yup.string()
                .required('تکمیل این فیلد الزامی است')
                .test('mother-onlynum-1', 'شماره موبایل نامعتبر است', val => {
                    if(!val) {return}
                    if(isNaN(val)) {
                        return false;
                    }
                    return true;
                })
                .test('mother-pn1-length', 'شماره موبایل باید 11 رقم باشد', val => val?.length === 11)
        }),
        family: yup.object().shape({
            address: yup.string().required('تکمیل این فیلد الزامی است'),
            phoneNumber: yup.string()
                .required('تکمیل این فیلد الزامی است')
                .test('family-onlynum', 'شماره تلفن نامعتبر است', val => {
                    if(!val) {return}
                    if(isNaN(val)) {
                        return false;
                    }
                    return true;
                })
                .test('family-pn-length', 'شماره تلفن باید حداقل 8 رقم باشد', val => val?.length >= 8),
            closeIndividualPhoneNumber: yup.string()
                .required('تکمیل این فیلد الزامی است')
                .test('family-onlynum-1', 'شماره تلفن نامعتبر است', val => {
                    if(!val) {return}
                    if(isNaN(val)) {
                        return false;
                    }
                    return true;
                })
                .test('family-pn1-length', 'شماره تلفن باید حداقل 8 رقم باشد', val => val?.length >= 8),
            livingWith: yup.string().required('تکمیل این فیلد الزامی است')
        }),
        medical: yup.object().shape({
            q1: yup.string(),
            q2: yup.string(),
            q3: yup.string()
        }),
        athletic: yup.object().shape({
            q1: yup.string(),
            q2: yup.string(),
            q3: yup.string(),
            q4: yup.string()
        }),
        more: yup.object().shape({
            willUseService: yup.boolean(),
            leftHanded: yup.boolean(),
            agreeWithSchoolCamps: yup.boolean()
        })
    }),
    handleSubmit(values, formikBag) {
        // console.log(values);
        // console.log(formikBag);
        formikBag.props.getData(values);
    }
}

const FormikFinalStage = withFormik(options)(FinalStage);

export default FormikFinalStage;