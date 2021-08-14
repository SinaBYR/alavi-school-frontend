import { useState, useEffect, useRef } from 'react'; 
import classes from './ContactUs.module.css';
import { FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa';
import HThree from '../../Utility/UI/Headings/HThree/HThree';
import HTwo from '../../Utility/UI/Headings/HTwo/HTwo';
import { SocialIcon } from 'react-social-icons';
import { Input, Textarea } from '../../Utility/Inputs';
import { withFormik, Form } from 'formik';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IoLocationSharp } from 'react-icons/io5';
import Map from './Map/Map';

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
    'دبستان میدان ساعت': ['04135562524', '04135556002'],
    'دبستان ویلاشهر': ['04133821930'],
    'دبیرستان دوره اول': ['04133822513']
}

const ContactUs = props => {
    const schoolBranch = SCHOOL_IDENTIFIERS[localStorage.getItem('branch')];

    return (
        <div className={classes.ContactUs}>
            <div className={classes.Wrapper}>
                <HThree style={{textAlign: 'center'}}>ارتباط با ما</HThree>
                <div className={classes.Content}>
                    <p style={{fontSize: '1.2rem', textAlign: 'center'}}>لطفا نظرات، سوالات، پیشنهادات و انتقادات خود را با ما درمیان بگذارید.</p>
                    <section className={classes.Section}>
                        <Form className={classes.Form}>
                            <Input label="نام و نام خانوداگی" config={{type: 'text', name: 'fullName'}}/>
                            <Input label="آدرس ایمیل" config={{type: 'email', name: 'email'}}/>
                            <Textarea label="متن پیام" config={{name: 'message'}}/>
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
                                    {SCHOOL_PHONE_NUMBERS[schoolBranch].map(phoneNum => <a key={phoneNum} href={'tel:' + phoneNum}>{phoneNum}</a>)}
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
    handleSubmit(values){
        console.log(values);
    }
}

const FormikContactUs = withFormik(options)(ContactUs);

export default FormikContactUs;
