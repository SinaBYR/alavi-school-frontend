import { Field, FastField } from 'formik';
import classes from './Textarea.module.css';
import { BiError } from 'react-icons/bi'; 


export const Textarea = ({label, config, style, error}) => {
    return (
        <div className={classes.InputWrapper} style={style}>
            <label>{label}</label>
            <Field as="textarea" {...config} style={{borderColor: error && 'red'}}/>
            {
                error &&
                <p className={classes.DesktopError}>{error}</p>
            }
            {
                error &&
                <p className={classes.MobileError}><BiError />&nbsp;{error}</p>
            }
        </div>
    )
}