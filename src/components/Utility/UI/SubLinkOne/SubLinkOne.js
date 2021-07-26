import classes from './SubLinkOne.module.css';
import { Link } from "react-router-dom"

const SubLinkOne = props => {
    return <Link className={classes.SubLinkOne} {...props}>{props.children}</Link>
}

export default SubLinkOne;