import { useState } from 'react';
import InitialStage from './InitialStage/InitialStage';
import classes from './Register.module.css';
import ButtonOne from '../../Utility/UI/ButtonOne/ButtonOne';

const Register = props => {
    const [stage, setStage] = useState(0);

    return (
        <div className={classes.Register}>
            <div className={classes.Wrapper}>
                {stage === 0 && <InitialStage />}
                <div className={classes.Controls}>
                    <ButtonOne onClick={() => setStage(stage + 1)}>شروع ثبت نام</ButtonOne>
                </div>
            </div>
        </div>
    )
}

export default Register;