import * as yup from 'yup';
import classes from './Login.module.css';
import { ButtonOne } from '../../../Utility/UI';
import { Input } from '../../../Utility/Inputs';
import { withFormik, Form } from 'formik';

const Login = ({errors, touched}) => {
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

const options = {
    mapPropsToValues(values) {
        return {
            code: '',
            password: ''
        }
    },
    validationSchema: yup.object().shape({
        code: yup.string().required('تکمیل این فیلد الزامی است'),
        password: yup.string().required('تکمیل این فیلد الزامی است')
    })
}

const FormikLogin = withFormik(options)(Login);

export default FormikLogin;