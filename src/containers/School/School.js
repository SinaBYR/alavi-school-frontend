import classes from './School.module.css';
import { Switch, Route } from 'react-router-dom';
import { PublicHeader } from '../../components/Navigation/PublicHeader/PublicHeader';
import { TopNav } from '../../components/Navigation/TopNav/TopNav';
import { Lessons } from '../../components/PublicPages/Lessons/Lessons';
import { MainPage } from '../../components/PublicPages/MainPage/MainPage';
import { Auth } from '../../components/PublicPages/Auth/Auth';
import CustomSwitch from '../../components/Utility/CustomSwitch/CustomSwitch';
import { Footer } from '../../components/Footer/Footer';
import ContactUs from '../../components/PublicPages/ContactUs/ContactUs';
import { Staff } from '../../components/PublicPages/Staff/Staff';
import { Gallery } from '../../components/PublicPages/Gallery/Gallery';
import { News } from '../../components/PublicPages/News/News';

const School = props => {

    // const search = encodeURIComponent(window.location.href);
    // console.log(window.location.search)
    // console.log(window.location.search.slice(-1))
    // console.log(props);
    return (
        <div className={classes.School}>
            <TopNav />
            <PublicHeader />
            <CustomSwitch>
                <Route path="/school/news" component={News}/>
                <Route path="/school/gallery" component={Gallery}/>
                <Route path="/school/staff" component={Staff}/>
                <Route path="/school/contact" component={ContactUs}/>
                <Route path="/school/auth" component={Auth}/>
                <Route path="/school/lessons/:grade" component={Lessons}/>
                <Route path="/school" component={MainPage}/>
            </CustomSwitch>
            <Footer />
        </div>
    )
}

export default School;