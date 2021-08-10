import classes from './FileInput.module.css';

export const FileInput = ({label, config}) => {
    return (
        <div className={classes.InputWrapper}>
            <label>{label}</label>
            <input type="file" accept="image/png, image/gif, image/jpeg" {...config} />
        </div>
    )
}