import { Link } from 'react-router-dom';
import classes from './Folder.module.css';

const YearFolder = ({year, path}) => {
    return (
        <Link to={path} className={classes.FolderLink}>
            <div className={classes.YearFolderContent}>
                سال تحصیلی
                <div className={classes.Year}>{year}</div>
            </div>
        </Link>
    )
}

const EventFolder = ({event, path}) => {
    return (
        <Link to={path} className={classes.FolderLink}>
            <div className={classes.EventFolderContent}>
                <div className={classes.Event}>{event}</div>
            </div>
        </Link>
    )
}

export { YearFolder, EventFolder }