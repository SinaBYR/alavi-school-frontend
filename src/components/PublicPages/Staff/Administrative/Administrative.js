import classes from './Administrative.module.css';
import teacher from '../../../../assets/teacher-2.jpg';
import { Member } from '../Member/Member';

const Administrative = props => {
    return (
        <div className={classes.Administrative}>
            <div className={classes.Wrapper}>
                <h2 style={{textAlign: 'center'}}>کادر اداری</h2>
                <div className={classes.Content}>

                    <Member
                        fullName="سینا بیرقدار"
                        position="معاون آموزشی"
                        education="لیسانس مدیریت"
                        photo={teacher}/>

                    <Member
                        fullName="سینا بیرقدار"
                        position="معاون آموزشی"
                        education="لیسانس مدیریت"
                        photo={teacher}/>

                    <Member
                        fullName="سینا بیرقدار"
                        position="معاون آموزشی"
                        education="لیسانس مدیریت"
                        photo={teacher}/>

                    <Member
                        fullName="سینا بیرقدار"
                        position="معاون آموزشی"
                        education="لیسانس مدیریت"
                        photo={teacher}/>

                </div>
            </div>
        </div>
    )
}


export { Administrative }