import classes from './Register.module.css';
import { useState } from 'react';
import ButtonOne from '../../../Utility/UI/ButtonOne/ButtonOne';
import InitialStage from './InitialStage/InitialStage';
import Preview from './Preview/Preview';
import FinalStage from './FinalStage/FinalStage';

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

    const registerFormHandler = data => {
        console.log(data);
    }

    return (
        <div className={classes.Register}>
            <div className={classes.Wrapper}>
                {stage === 0 && <InitialStage next={nextStageHandler}/>}
                {stage === 1 && <Preview prev={prevStageHandler} next={nextStageHandler} />}
                {stage === 2 && <FinalStage prev={prevStageHandler} getData={(data) => registerFormHandler(data)}/>}
            </div>
        </div>
    )
}

export default Register;