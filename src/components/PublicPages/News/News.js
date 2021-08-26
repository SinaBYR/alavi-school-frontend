import classes from './News.module.css';
import image from '../../../assets/kitten.jpg';
import LinkOne from '../../Utility/UI/LinkOne/LinkOne';
import { GrView, GrFormView } from 'react-icons/gr';
import { FiEye } from 'react-icons/fi';
import { BiCalendarEdit } from 'react-icons/bi';

const News = props => {
    return (
        <div className={classes.News}>
            <div className={classes.Wrapper}>
                <h2 style={{textAlign: 'center'}}>اخبار مجموعه</h2>
                <div className={classes.Content}>
                    <div className={classes.CardTwo}>
                        <h4>برنامه امتحانات نوبت دوم اصلاحيه</h4>
                        <div className={classes.Thumbnail}>
                            <img src={image} alt="kitten"/>
                        </div>
                        <div className={classes.Bottom}>
                            <div className={classes.Info} style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{
                                        // display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                        paddingLeft: '8px',
                                        textAlign: 'center'
                                            }}>
                                    <BiCalendarEdit />
                                    <div>16 اردیبهشت</div>
                                </div>
                                <div style={{
                                        // display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                        paddingRight: '8px',
                                        // borderRight: '1px solid #dbdbdb',
                                        textAlign: 'center'
                                            }}>
                                    <FiEye />
                                    <div>299</div>
                                </div>
                            </div>
                            <LinkOne to="school/news/249763" style={{marginRight: 'auto'}}>ادامه مطلب</LinkOne>
                        </div>
                    </div>
                    <div className={classes.CardTwo}>
                        <h4>برنامه امتحانات نوبت دوم اصلاحيه</h4>
                        <div className={classes.Thumbnail}>
                            <img src={image} alt="kitten"/>
                        </div>
                        <div className={classes.Bottom}>
                            <div className={classes.Info} style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{
                                        // display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                        paddingLeft: '8px',
                                        textAlign: 'center'
                                            }}>
                                    <BiCalendarEdit />
                                    <div>16 اردیبهشت</div>
                                </div>
                                <div style={{
                                        // display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                        paddingRight: '8px',
                                        // borderRight: '1px solid #dbdbdb',
                                        textAlign: 'center'
                                            }}>
                                    <FiEye />
                                    <div>299</div>
                                </div>
                            </div>
                            <LinkOne to="school/news/249763" style={{marginRight: 'auto'}}>ادامه مطلب</LinkOne>
                        </div>
                    </div>
                    <div className={classes.CardTwo}>
                        <h4 style={{textAlign: 'center'}}>برنامه امتحانات نوبت دوم اصلاحيه</h4>
                        <div className={classes.Thumbnail}>
                            <img src={image} alt="kitten"/>
                        </div>
                        <div className={classes.Bottom}>
                            <div className={classes.Info} style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{
                                        fontSize: '12px',
                                        paddingLeft: '8px',
                                        textAlign: 'center'
                                        }}>
                                    <BiCalendarEdit />
                                    <div>16 اردیبهشت</div>
                                </div>
                                <div style={{
                                        fontSize: '12px',
                                        paddingRight: '8px',
                                        textAlign: 'center'
                                        }}>
                                    <FiEye />
                                    <div>299</div>
                                </div>
                            </div>
                            <LinkOne to="school/news/249763" style={{marginRight: 'auto'}}>ادامه مطلب</LinkOne>
                        </div>
                    </div>
                    <div className={classes.CardTwo}>
                        <h4>برنامه امتحانات نوبت دوم اصلاحيه</h4>
                        <div className={classes.Thumbnail}>
                            <img src={image} alt="kitten"/>
                        </div>
                        <div className={classes.Bottom}>
                            <div className={classes.Info} style={{display: 'flex', alignItems: 'center'}}>
                                <div style={{
                                        // display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                        paddingLeft: '8px',
                                        textAlign: 'center'
                                            }}>
                                    <BiCalendarEdit />
                                    <div>16 اردیبهشت</div>
                                </div>
                                <div style={{
                                        // display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        fontSize: '12px',
                                        paddingRight: '8px',
                                        // borderRight: '1px solid #dbdbdb',
                                        textAlign: 'center'
                                            }}>
                                    <FiEye />
                                    <div>299</div>
                                </div>
                            </div>
                            <LinkOne to="school/news/249763" style={{marginRight: 'auto'}}>ادامه مطلب</LinkOne>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { News }