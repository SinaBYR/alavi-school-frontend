import classes from './Academic.module.css';
import teacher from '../../../../assets/teacher-1.jpg';
import { classExpression } from '@babel/types';

const Academic = props => {
    return (
        <div className={classes.Academic}>
            <div className={classes.Wrapper}>
                <h3>کادر آموزشی</h3>
                <div className={classes.Content}>

                    <div className={classes.Member}>
                        <div className={classes.Photo}>
                            <img src={teacher} alt="تصویر دبیر"/>
                        </div>
                        <div className={classes.Header}>
                            <div className={classes.Name}>سید دانیال معین آل داود</div>
                        </div>
                        <div className={classes.Info}>
                            <div className={classes.Properties}>
                                <div>سمت</div>
                                <div>تحصیلات</div>
                            </div>
                            <div className={classes.Values}>
                                <div>دبیر تربیت بدنی</div>
                                <div>لیسانس مهندسی کامپیوتر</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.Member}>
                        <div className={classes.Photo}>
                            <img src={teacher} alt="تصویر دبیر"/>
                        </div>
                        <div className={classes.Header}>
                            <div className={classes.Name}>سعید حسین نیا سنجرانی</div>
                        </div>
                        <div className={classes.Info}>
                            <div className={classes.Properties}>
                                <div>سمت</div>
                                <div>تحصیلات</div>
                            </div>
                            <div className={classes.Values}>
                                <div>دبیر تربیت بدنی</div>
                                <div>فوق دیپلم ادبیات فارسی</div>
                            </div>
                        </div>
                    </div>

                    <div className={classes.Member}>
                        <div className={classes.Photo}>
                            <img src={teacher} alt="تصویر دبیر"/>
                        </div>
                        <div className={classes.Header}>
                            <div className={classes.Name}>عباس بوعذار</div>
                        </div>
                        <div className={classes.Info}>
                            <div className={classes.Properties}>
                                <div>سمت</div>
                                <div>تحصیلات</div>
                            </div>
                            <div className={classes.Values}>
                                <div>دبیر تربیت بدنی</div>
                                <div>فوق دیپلم ادبیات فارسی</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Academic;