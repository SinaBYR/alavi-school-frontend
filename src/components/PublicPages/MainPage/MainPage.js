import classes from './MainPage.module.css';
import { SectionOne } from './SectionOne/SectionOne';
import { SectionTwo } from './SectionTwo/SectionTwo';
import { SectionThree } from './SectionThree/SectionThree';

const MainPage = props => {

    return (
        <div className={classes.MainPage}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    )
}

export { MainPage }