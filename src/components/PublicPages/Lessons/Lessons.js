import MultiView from '../../Utility/MultiView/MultiView';
import HTwo from '../../Utility/UI/Headings/HTwo/HTwo';
import classes from './Lessons.module.css';
import placeholder from '../../../assets/students.jpg';
import { FaPlay } from 'react-icons/fa';
import { AiFillPlayCircle } from 'react-icons/ai';
import HThree from '../../Utility/UI/Headings/HThree/HThree';

const Lessons = props => {
    console.log(props);
    return (
        <div className={classes.Lessons}>
            {/* <MultiView></MultiView> */}
            <div className={classes.Wrapper}>
                <HThree>محتوای آموزشی / پایه اول</HThree>
                <div className={classes.Content}>
                    
                    <div className={classes.Media}>
                        <img src={placeholder} alt="placeholder"/>
                    </div>
                    <div className={classes.Panel}>
                        <div className={classes.Item}>
                            <div>
                                <p>علوم تجربی</p>
                                <p>24 / 8 / 1397</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>ریاضی</p>
                                <p>8 / 2 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>مطالعات اجتماعی</p>
                                <p>14 / 6 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>مطالعات اجتماعی</p>
                                <p>14 / 6 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>مطالعات اجتماعی</p>
                                <p>14 / 6 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>مطالعات اجتماعی</p>
                                <p>14 / 6 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>مطالعات اجتماعی</p>
                                <p>14 / 6 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>مطالعات اجتماعی</p>
                                <p>14 / 6 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>مطالعات اجتماعی</p>
                                <p>14 / 6 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>مطالعات اجتماعی</p>
                                <p>14 / 6 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                        <div className={classes.Item}>
                            <div>
                                <p>مطالعات اجتماعی</p>
                                <p>14 / 6 / 1398</p>
                            </div>
                            <div className={classes.Play}><AiFillPlayCircle fontSize="2rem"/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lessons;