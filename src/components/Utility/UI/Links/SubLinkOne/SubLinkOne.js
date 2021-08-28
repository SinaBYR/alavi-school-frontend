import classes from './SubLinkOne.module.css';
import { Link } from "react-router-dom"

export const SubLinkOne = props => {
    return <Link className={classes.SubLinkOne} {...props}>{props.children}</Link>
}