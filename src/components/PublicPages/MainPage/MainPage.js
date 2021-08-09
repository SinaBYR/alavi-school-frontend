import PublicHeader from '../../Navigation/PublicHeader/PublicHeader';
import classes from './MainPage.module.css';
import SectionOne from './SectionOne/SectionOne';
import TopNav from '../../Navigation/TopNav/TopNav';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './SectionThree/SectionThree';
import Footer from '../../Footer/Footer';



const MainPage = props => {

    return (
        <div className={classes.MainPage}>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
        </div>
    )
}

export default MainPage;