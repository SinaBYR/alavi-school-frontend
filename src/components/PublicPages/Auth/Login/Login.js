import classes from './Login.module.css';
import { MdAccountBox } from 'react-icons/md';
import ButtonOne from '../../../Utility/UI/ButtonOne/ButtonOne';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';
import { withFormik, Form } from 'formik';
import * as yup from 'yup';
import { Input } from '../../../Utility/Inputs';
import HThree from '../../../Utility/UI/Headings/HThree/HThree';

const Login = ({errors, touched}) => {

    const [passVisible, setPassVisible] = useState(false);

    return(
        <div className={classes.Login}>
            <div className={classes.Wrapper}>
                <h2 style={{textAlign: 'center', marginBottom: '1rem'}}>ورود به پنل کاربری</h2>
                <Form className={classes.Form}>
                    <Input label="کدملی" type="text" name="code" error={touched.code && errors.code}/>
                    <Input label="رمزعبور" type="password" name="password" error={touched.password && errors.password}/>

                    <ButtonOne style={{width: '100%', marginTop: '2rem'}}>ورود</ButtonOne>
                    <p style={{color: 'gray', fontSize: '0.9rem', margin: '1rem 0', textAlign: 'center'}}>رمز عبور خود را فراموش کرده اید؟</p>
                    <p style={{textAlign: 'center'}}>رمزعبور اولیه، همان کدملی دانش آموز است.</p>
                </Form>
            </div>
        </div>
    )
}

// Minimum eight characters, at least one letter and one number:
const passwordRegex = "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$";

const options = {
    mapPropsToValues(values) {
        return {
            code: '',
            password: ''
        }
    },
    validationSchema: yup.object().shape({
        code: yup.number().required('تکمیل این فیلد الزامی است'),
        password: yup.string().required('تکمیل این فیلد الزامی است')
    })
}

const FormikLogin = withFormik(options)(Login);

export default FormikLogin;