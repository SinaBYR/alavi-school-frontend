import classes from './NavLinkOne.module.css';
import { NavLink } from "react-router-dom"

const NavLinkOne = props => {
    return <NavLink className={classes.NavLinkOne} {...props}>{props.children}</NavLink>
}

export default NavLinkOne;