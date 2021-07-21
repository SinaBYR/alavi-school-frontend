import MainPageHeader from './MainPageHeader/MainPageHeader';
import classes from './MainPage.module.css';
import SectionOne from './SectionOne/SectionOne';
import TopNav from '../Navigation/TopNav/TopNav';



const MainPage = props => {
    return (
        <div className={classes.MainPage}>
            <TopNav />
            <MainPageHeader />
            <SectionOne />
        </div>
    )
}

export default MainPage;