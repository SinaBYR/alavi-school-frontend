import classes from './Login.module.css';
import { MdAccountBox } from 'react-icons/md';
import ButtonOne from '../../../Utility/UI/ButtonOne/ButtonOne';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { useState } from 'react';

const Login = props => {

    const [passVisible, setPassVisible] = useState(false);

    return(
        <div className={classes.Login}>
            <div className={classes.Wrapper}>
                <h2>ورود به پنل کاربری</h2>
                <p></p>
                <form className={classes.Form}>

                    <div className={classes.Item}>
                        {/* <div className={classes.Icon}>
                            <MdAccountBox />
                        </div> */}
                        <div className={classes.InputWrapper}>
                            <label>کدملی</label>
                            <input type="text" className={classes.Input}/>
                        </div>
                    </div>

                    <div className={classes.Item}>
                        {/* <div className={classes.Icon}>
                            <MdAccountBox />
                        </div> */}
                        <div className={classes.InputWrapper}>
                            <label>رمزعبور</label>
                            <input type={passVisible ? 'text' : 'password'} className={classes.Input}/>
                            <div className={classes.PasswordVisibility} onClick={() => setPassVisible(!passVisible)}>
                                {
                                    passVisible ? <AiFillEye /> : <AiFillEyeInvisible />
                                }
                            </div>
                        </div>
                    </div>
                    {/* <button>ورود</button> */}
                    <ButtonOne style={{width: '100%', marginTop: '2rem'}}>ورود</ButtonOne>
                    <p style={{color: 'gray', fontSize: '0.9rem', margin: '1rem 0', textAlign: 'center'}}>رمز عبور خود را فراموش کرده اید؟</p>
                    <p style={{textAlign: 'center'}}>رمزعبور اولیه، همان کدملی دانش آموز است.</p>
                </form>
            </div>
        </div>
    )
}

export default Login;