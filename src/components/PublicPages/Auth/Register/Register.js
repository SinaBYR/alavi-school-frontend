import classes from './Register.module.css';
import { useState } from 'react';
import ButtonOne from '../../../Utility/UI/ButtonOne/ButtonOne';
import InitialStage from './InitialStage/InitialStage';
import Preview from './Preview/Preview';
import FinalStage from './FinalStage/FinalStage';
import Footer from '../../../Footer/Footer';

const Register = props => {
    const [stage, setStage] = useState(0);

    const nextStageHandler = () => {
        setStage(stage + 1);
        window.scrollTo(0, 0);
    }

    const prevStageHandler = () => {
        setStage(stage - 1);
        window.scrollTo(0, 0);
    }

    return (
        <>
        <div className={classes.Register}>
            <div className={classes.Wrapper}>
                {stage === 0 && <InitialStage />}
                {stage === 1 && <Preview />}
                {stage === 2 && <FinalStage />}
                <div className={classes.Controls}>
                    <ButtonOne onClick={nextStageHandler}>
                        {stage === 0 && 'شروع ثبت نام'}
                        {stage === 1 && 'مرحله بعد'}
                        {stage === 2 && 'پیش ثبت نام'}
                    </ButtonOne>
                    {
                    stage > 0 &&
                        <ButtonOne onClick={prevStageHandler}>
                            {stage === 1 && 'مرحله قبل'}
                            {stage === 2 && 'مرحله قبل'}
                        </ButtonOne>
                    }
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default Register;