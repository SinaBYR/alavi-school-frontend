import MultiView from '../../Utility/MultiView/MultiView';
import classes from './Lessons.module.css';

const Lessons = props => {
    return (
        <div className={classes.Lessons}>
            <MultiView></MultiView>
        </div>
    )
}

export default Lessons;