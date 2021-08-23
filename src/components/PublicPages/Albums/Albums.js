import classes from './Albums.module.css';
import { ImFolder } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Albums = props => {
    return (
        <div className={classes.Albums}>
            <div className={classes.Wrapper}>
                <h2 style={{textAlign: 'center'}}>آلبوم تصاویر</h2>
                <div className={classes.Content}>

                    <Link to="/school/staff/academic" className={classes.Link}>
                        <div className={classes.Folder}>
                            سال تحصیلی
                            <div className={classes.Year}>00-01</div>
                        </div>
                    </Link>
                    <Link to="/school/staff/academic" className={classes.Link}>
                        <div className={classes.Folder}>
                            سال تحصیلی
                            <div className={classes.Year}>99-00</div>
                        </div>
                    </Link>
                    <Link to="/school/staff/academic" className={classes.Link}>
                        <div className={classes.Folder}>
                            سال تحصیلی
                            <div className={classes.Year}>98-99</div>
                        </div>
                    </Link>
                    <Link to="/school/staff/academic" className={classes.Link}>
                        <div className={classes.Folder}>
                            سال تحصیلی
                            <div className={classes.Year}>97-98</div>
                        </div>
                    </Link>
                    <Link to="/school/staff/academic" className={classes.Link}>
                        <div className={classes.Folder}>
                            سال تحصیلی
                            <div className={classes.Year}>96-97</div>
                        </div>
                    </Link>
                    <Link to="/school/staff/academic" className={classes.Link}>
                        <div className={classes.Folder}>
                            سال تحصیلی
                            <div className={classes.Year}>95-96</div>
                        </div>
                    </Link>
                    <Link to="/school/staff/academic" className={classes.Link}>
                        <div className={classes.Folder}>
                            سال تحصیلی
                            <div className={classes.Year}>94-95</div>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export { Albums }