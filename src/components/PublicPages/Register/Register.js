import classes from './Register.module.css';
import { useState } from 'react';
import ButtonOne from '../../Utility/UI/ButtonOne/ButtonOne';
import InitialStage from './InitialStage/InitialStage';
import Preview from './Preview/Preview';

const Register = props => {
    const [stage, setStage] = useState(0);

    return (
        <div className={classes.Register}>
            <div className={classes.Wrapper}>
                {stage === 0 && <InitialStage />}
                {stage === 1 && <Preview />}
                <div className={classes.Controls}>
                    <ButtonOne onClick={() => setStage(stage + 1)}>
                        {stage === 0 && 'مرحله بعد'}
                        {stage === 1 && 'مرحله بعد'}
                    </ButtonOne>
                    {
                    stage > 0 &&
                        <ButtonOne onClick={() => setStage(stage - 1)}>
                            {stage === 1 && 'مرحله قبل'}
                        </ButtonOne>
                    }
                </div>
            </div>
        </div>
    )
}

export default Register;