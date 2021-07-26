import { Switch, Route } from 'react-router-dom';
import PublicHeader from '../../components/Navigation/PublicHeader/PublicHeader';
import TopNav from '../../components/Navigation/TopNav/TopNav';
import Lessons from '../../components/PublicPages/Lessons/Lessons';
import MainPage from '../../components/PublicPages/MainPage/MainPage';
import CustomSwitch from '../../components/Utility/CustomSwitch/CustomSwitch';
import classes from './School.module.css';

const School = props => {

    // const search = encodeURIComponent(window.location.href);
    // console.log(window.location.search)
    // console.log(window.location.search.slice(-1))
    // console.log(props);
    return (
        <div className={classes.School}>
            {/* <ProgressBar /> */}
            <TopNav />
            <PublicHeader />
            {/* <CustomSwitch></CustomSwitch> */}
            <CustomSwitch>
                <Route path={props.match.path + "/lessons"} component={Lessons}/>
                <Route path="/school" component={MainPage}/>
            </CustomSwitch>
        </div>
    )
}

export default School;