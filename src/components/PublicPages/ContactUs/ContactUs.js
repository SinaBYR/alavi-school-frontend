import { FaTelegram } from 'react-icons/fa';
import HThree from '../../Utility/UI/Headings/HThree/HThree';
import HTwo from '../../Utility/UI/Headings/HTwo/HTwo';
import classes from './ContactUs.module.css';
import { SocialIcon } from 'react-social-icons';
import { Input, Textarea } from '../../Utility/Inputs';
import { withFormik, Form } from 'formik';

const SCHOOL_IDENTIFIERS = {
    1: 'دبستان میدان ساعت',
    2: 'دبستان ویلاشهر',
    3: 'دبیرستان دوره اول'
}

const ContactUs = props => {
    const schoolBranch = SCHOOL_IDENTIFIERS[localStorage.getItem('branch')];

    return (
        <div className={classes.ContactUs}>
            <div className={classes.Wrapper}>
                <HThree style={{textAlign: 'center'}}>با ما در ارتباط باشید</HThree>
                <div className={classes.Content}>
                    <div className={classes.SocialLinks}>
                        <a href="#" target="_blank" className={classes.Item}>
                            <p>کانال تلگرام</p>
                            <SocialIcon style={{width: '30px', height: '30px'}} url="telegram.me"/>
                        </a>
                        <a href="#" target="_blank" className={classes.Item}>
                            <p>کانال تلگرام</p>
                            <SocialIcon style={{width: '30px', height: '30px'}} url="instagram.com"/>
                        </a>
                    </div>
                    <Form className={classes.Form}>
                        <Input label="نام و نام خانوداگی" config={{type: 'text', name: 'fullName'}}/>
                        <Input label="آدرس ایمیل" config={{type: 'email', name: 'email'}}/>
                        <Textarea label="پیام شما" config={{name: 'message'}}/>
                        {/* <button>Submit</button> */}
                    </Form>
                    <div className={classes.Map}></div>
                </div>

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