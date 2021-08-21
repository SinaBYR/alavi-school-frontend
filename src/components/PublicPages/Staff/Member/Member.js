import classes from './Member.module.css';

const Member = ({fullName, photo, position, education}) => {
    return (
        <div className={classes.Member}>
            <div className={classes.Header}>
                <div className={classes.Photo}>
                    <img src={photo} alt="تصویر دبیر"/>
                </div>
                <div className={classes.Name}>{fullName}</div>
            </div>
            <div className={classes.Info}>
                <div className={classes.Properties}>
                    <div>سمت</div>
                    <div>تحصیلات</div>
                </div>
                <div className={classes.Values}>
                    <div>دبیر {position}</div>
                    <div>{education}</div>
                </div>
            </div>
        </div>
    )
}

export { Member };