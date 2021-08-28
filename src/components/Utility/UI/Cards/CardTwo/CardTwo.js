import classes from './CardTwo.module.css';
import { LinkOne } from '../..';
import { FiEye } from 'react-icons/fi';
import { BiCalendarEdit } from 'react-icons/bi';

export const CardTwo = ({title, src, date, views, path, style}) => {
    return (
        <div className={classes.CardTwo} style={style}>
            <h4 style={{textAlign: 'center'}}>{title}</h4>
            <div className={classes.Thumbnail}>
                <img src={src} alt="kitten"/>
            </div>
            <div className={classes.Bottom}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {
                        date &&
                        <div style={{
                            fontSize: '12px',
                            paddingLeft: '8px',
                            textAlign: 'center'
                            }}>
                            <BiCalendarEdit />
                            <div>{date}</div>
                        </div>
                    }
                    {
                        views &&
                        <div style={{
                            fontSize: '12px',
                            paddingRight: '8px',
                            textAlign: 'center'
                            }}>
                            <FiEye />
                            <div>{views}</div>
                        </div>
                    }
                </div>
                <LinkOne to={path} style={{marginRight: 'auto'}}>ادامه مطلب</LinkOne>
            </div>
        </div>
    )
}