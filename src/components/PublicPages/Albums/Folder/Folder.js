import { Link } from 'react-router-dom';
import classes from './Folder.module.css';

const Folder = ({text, path, year, event}) => {
    return (
        <Link to={path} className={classes.FolderLink}>
            <div className={classes.FolderContent}>
                {year && 'سال تحصیلی'}
                <div className={classes.Year}>{text}</div>
            </div>
        </Link>
    )
}

export { Folder }