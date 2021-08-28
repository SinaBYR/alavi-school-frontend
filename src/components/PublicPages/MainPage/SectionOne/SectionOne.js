import classes from './SectionOne.module.css';
import image from '../../../../assets/bird.jpg';
import imageOne from '../../../../assets/bird-1.jpg';
import imageTwo from '../../../../assets/kitten.jpg';
import imageThree from '../../../../assets/nature-1.jpg';
import imageFour from '../../../../assets/nature-2.jpg';
import { Carousel } from '../../../Utility/Carousel/Carousel';

const SectionOne = props => {

    const slides = [
        (<img className={classes.IMG} src={image} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageOne} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageTwo} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageThree} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageFour} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={image} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageOne} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageTwo} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageThree} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageFour} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={image} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageOne} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageTwo} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageThree} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageFour} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={image} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageOne} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageTwo} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageThree} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageFour} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={image} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageOne} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageTwo} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageThree} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageFour} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={image} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageOne} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageTwo} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageThree} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageFour} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={image} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageOne} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageTwo} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageThree} alt="a pair of glasses"/>),
        (<img className={classes.IMG} src={imageFour} alt="a pair of glasses"/>),
    
    ]
    return (
        <section className={classes.SectionOne}>
            <div className={classes.Wrapper}>
                {/* <Carousel slides={slides} thumbnail arrows infinite interval="5000" /> */}

                {/* <div className={classes.RegisterPost}>
                    <div className={classes.Text}>
                        <HOne>ثبت نام آغاز شد</HOne>
                        <p>پیش دبستانی / دبستان / دبیرستان دوره اول و دوم</p>
                        <LinkOne style={{marginTop: '1rem'}} to="/school/lessons">اطلاعات بیشتر</LinkOne>
                    </div>
                    <img src={LandingImage} alt="landing"/>
                </div> */}
            </div>
        </section>
    )
}

export { SectionOne }