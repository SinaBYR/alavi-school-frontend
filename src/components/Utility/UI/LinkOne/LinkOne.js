import classes from './LinkOne.module.css';
import { Link } from "react-router-dom"

const LinkOne = props => {
    return <Link className={classes.LinkOne} {...props}>{props.children}</Link>
}

export default LinkOne;