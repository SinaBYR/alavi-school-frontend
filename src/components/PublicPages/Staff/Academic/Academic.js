import classes from './Academic.module.css';
import teacher from '../../../../assets/teacher-1.jpg';
import { Member } from '../Member/Member';

const Academic = props => {
    return (
        <div className={classes.Academic}>
            <div className={classes.Wrapper}>
                <h2 style={{textAlign: 'center'}}>کادر آموزشی</h2>
                <div className={classes.Content}>

                    <Member
                        fullName="عباس بوعذار"
                        position="دبیر ادبیات فارسی"
                        education="دکترای زبان و ادبیات فارسی"
                        photo={teacher}/>

                    <Member
                        fullName="عباس بوعذار"
                        position="دبیر ادبیات فارسی"
                        education="دکترای زبان و ادبیات فارسی"
                        photo={teacher}/>

                    <Member
                        fullName="عباس بوعذار"
                        position="دبیر ادبیات فارسی"
                        education="دکترای زبان و ادبیات فارسی"
                        photo={teacher}/>

                    <Member
                        fullName="عباس بوعذار"
                        position="دبیر ادبیات فارسی"
                        education="دکترای زبان و ادبیات فارسی"
                        photo={teacher}/>

                </div>
            </div>
        </div>
    )
}

export default Academic;