import classes from './NavLinkOne.module.css';
import { NavLink } from "react-router-dom"

export const NavLinkOne = props => {
    return <NavLink className={classes.NavLinkOne} {...props}>{props.children}</NavLink>
}