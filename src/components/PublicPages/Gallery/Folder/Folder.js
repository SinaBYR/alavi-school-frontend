import classes from './Folder.module.css';
import { Link } from 'react-router-dom';

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

const AlbumFolder = ({album, path}) => {
    return (
        <Link to={path} className={classes.FolderLink}>
            <div className={classes.AlbumFolderContent}>
                <div className={classes.Album}>{album}</div>
            </div>
        </Link>
    )
}

export { YearFolder, AlbumFolder }