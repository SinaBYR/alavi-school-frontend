import classes from './LinkOne.module.css';
import { Link } from "react-router-dom"

export const LinkOne = props => {
    return <Link className={classes.LinkOne} {...props}>{props.children}</Link>
}