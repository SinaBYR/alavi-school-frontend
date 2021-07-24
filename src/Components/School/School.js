import { Switch, Route } from 'react-router-dom';
import PublicHeader from '../Navigation/PublicHeader/PublicHeader';
import TopNav from '../Navigation/TopNav/TopNav';
import MainPage from './MainPage/MainPage';
import classes from './School.module.css';



const School = props => {

    // const search = encodeURIComponent(window.location.href);
    // console.log(window.location.search)
    // console.log(window.location.search.slice(-1))
    // console.log(props);
    return (
        <div className={classes.School}>
            <TopNav />
            <PublicHeader />
            <Switch>
                <Route path="/" component={MainPage}/>
            </Switch>
        </div>
    )
}

export default School;