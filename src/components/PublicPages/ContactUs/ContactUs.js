import classes from './ContactUs.module.css';
import { withFormik, Form } from 'formik';
import * as yup from 'yup';
import Map from './Map/Map';
import HThree from '../../Utility/UI/Headings/HThree/HThree';
import ButtonOne from '../../Utility/UI/ButtonOne/ButtonOne';
import { Input, Textarea } from '../../Utility/Inputs';
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhone, FaTelegram, FaInstagram } from 'react-icons/fa';

const SCHOOL_IDENTIFIERS = {
    1: 'دبستان میدان ساعت',
    2: 'دبستان ویلاشهر',
    3: 'دبیرستان دوره اول'
}

const SCHOOL_ADDRESSES = {
    'دبستان میدان ساعت': 'تبریز - ارتش جنوبی - میدان ساعت کوچه فهیمی - ساختمان علوی',
    'دبستان ویلاشهر': 'تبریز - ائل گولی - کوی ویلاشهر - انتهای خیابان گلها',
    'دبیرستان دوره اول': 'تبریز - ائل گولی - کوی ویلاشهر - انتهای خیابان گلها',
}
const SCHOOL_PHONE_NUMBERS = {
    'دبستان میدان ساعت': ['35562524', '35556002'],
    'دبستان ویلاشهر': ['33821930'],
    'دبیرستان دوره اول': ['33822513']
}

const ContactUs = ({errors, touched}) => {
    const schoolBranch = SCHOOL_IDENTIFIERS[localStorage.getItem('branch')];

    return (
        <div className={classes.ContactUs}>
            <div className={classes.Wrapper}>
                <HThree style={{textAlign: 'center'}}>ارتباط با ما</HThree>
                <div className={classes.Content}>
                    <p style={{fontSize: '1.2rem', textAlign: 'center'}}>لطفا نظرات، سوالات، پیشنهادات و انتقادات خود را با ما درمیان بگذارید.</p>
                    <section className={classes.Section}>
                        <Form className={classes.Form}>
                            <Input label="نام و نام خانوداگی" type="text" name="fullName" error={touched.fullName && errors.fullName}/>
                            <Input label="آدرس ایمیل" type="email" name="email" error={touched.email && errors.email}/>
                            <Input
                                label="متن پیام"
                                type="textarea"
                                name="message"
                                error={touched.message && errors.message}
                                parentConfig={{style: {gridColumn: '1 /span 2'}}}/>
                            <ButtonOne type="submit" style={{gridColumn: '2 /span 1'}}>ارسال</ButtonOne>
                        </Form>
                    </section>

                    <section className={classes.Section}>
                        <div className={classes.Links}>
                            <a href="#" target="_blank" className={classes.Link}>
                                <p>کانال تلگرام</p>
                                <i><FaTelegram /></i>
                            </a>
                            <a href="#" target="_blank" className={classes.Link}>
                                <p>صفحه اینستاگرام</p>
                                <i><FaInstagram /></i>
                            </a>
                        </div>
                    </section>

                    <section className={classes.Section}>
                        <div className={classes.Address}>
                            <div className={classes.AddressItem}>
                                <div><IoLocationSharp style={{fontSize: "30px", margin: '0.5rem 0'}}/></div>
                                <div>{SCHOOL_ADDRESSES[schoolBranch]}</div>
                            </div>
                            <div className={classes.AddressItem}>
                                <div><FaPhone style={{fontSize: "30px", margin: '0.5rem 0'}}/></div>
                                <div>
                                    {SCHOOL_PHONE_NUMBERS[schoolBranch].map(phoneNum => <a key={phoneNum} href={'tel:' + '041' + phoneNum}>{phoneNum + ' - ' + '041'}</a>)}
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Map />
            </div>
        </div>
    )
}

const options = {
    mapPropsToValues(props) {
        return {
            fullName: '',
            email: '',
            message: ''
        }
    },
    validationSchema: yup.object().shape({
        fullName: yup.string().required('تکمیل این فیلد الزامی است'),
        email: yup.string().email('آدرس ایمیل نامعتبر است').required('تکمیل این فیلد الزامی است'),
        message: yup.string().required('تکمیل این فیلد الزامی است')
    }),
    handleSubmit(values){
        console.log(values);
    }
}

const FormikContactUs = withFormik(options)(ContactUs);

export default FormikContactUs;
