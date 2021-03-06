import classes from './CardOne.module.css';
import { LinkOne } from '../..';

export const CardOne = props => {
    const hStyles = props.hStyles;
    const pStyles = props.pStyles;
    const lStyles = props.lStyles;

    return (
        <div className={classes.Card}>
            <h2 style={hStyles}>{props.title}</h2>
            <p style={pStyles}>{props.children}</p>
            {props.to && <LinkOne styles={lStyles} to={props.to}>{props.linkTitle}</LinkOne>}
        </div>
    )
}