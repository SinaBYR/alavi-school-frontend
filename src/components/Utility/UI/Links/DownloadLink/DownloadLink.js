import classes from './DownloadLink.module.css';

export const DownloadLink = props => {
    return <a className={classes.DownloadLink} target="_blank"  rel="noopener noreferrer" {...props}>{props.children}</a>
}