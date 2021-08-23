import classes from './Albums.module.css';
import { Folder } from './Folder/Folder';

const Albums = props => {
    return (
        <div className={classes.Albums}>
            <div className={classes.Wrapper}>
                <h2 style={{textAlign: 'center'}}>آلبوم تصاویر</h2>
                <div className={classes.Content}>

                    <Folder path="/school/staff/academic" text="00-01" year/>
                    <Folder path="/school/staff/academic" text="99-00" year/>
                    <Folder path="/school/staff/academic" text="98-99" year/>
                    <Folder path="/school/staff/academic" text="97-98" year/>
                    <Folder path="/school/staff/academic" text="96-97" year/>
                    <Folder path="/school/staff/academic" text="95-96" year/>
                    <Folder path="/school/staff/academic" text="94-95" year/>

                </div>
            </div>
        </div>
    )
}

export { Albums }