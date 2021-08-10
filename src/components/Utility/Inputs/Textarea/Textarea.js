import { Field, FastField } from 'formik';
import classes from './Textarea.module.css';


export const Textarea = ({label, config}) => {
    return (
        <div className={classes.InputWrapper}>
            <label>{label}</label>
            <Field as="textarea" {...config} />
        </div>
    )
}