import classes from './SectionOne.module.css';
import React, { useState } from 'react';
import LandingImage from '../../../../assets/illustrations/undraw_Online_learning_re_qw08.svg';
import LinkOne from '../../../Utility/UI/LinkOne/LinkOne';
import HOne from '../../../Utility/UI/Headings/HOne/HOne';
import Carousel, { slidesToShowPlugin, arrowsPlugin, Dots  } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import image from '../../../../assets/bg-1.jpg';
import imageTwo from '../../../../assets/students.jpg';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

// const SCHOOL_IDENTIFIERS = {
//     1: 'دبستان میدان ساعت',
//     2: 'دبستان ویلاشهر',
//     3: 'دبیرستان دوره اول'
// }

const SectionOne = props => {
    const [value, setValue] = useState(0)
    const [slides, setSlides] = useState([
        (<img src={image} alt="a pair of glasses"/>),
        (<img src={imageTwo} alt="a pair of glasses"/>)
    ])
    const [thumbnails, setThumbnails] = useState([
        (<div className={classes.Thumbnail}><img src={image} alt="a pair of glasses"/></div>),
        (<div className={classes.Thumbnail}><img src={imageTwo} alt="a pair of glasses"/></div>)
    ])

    const slideOnChangeHandler = value => {
        setValue(value)
      }

    return (
        <section className={classes.SectionOne}>
            <div className={classes.Wrapper}>
                {/* <div className={classes.Text}>
                    <HOne>ثبت نام آغاز شد</HOne>
                    <p>پیش دبستانی / دبستان / دبیرستان دوره اول و دوم</p>
                    <LinkOne style={{marginTop: '1rem'}} to="/school/lessons">اطلاعات بیشتر</LinkOne>
                </div>
                <img src={LandingImage} alt="landing"/> */}
                {/* <div className={classes.Carousel}>
                    <Carousel width="100%" emulateTouch showArrows={false}>
                        <div className={classes.RegisterPost}>
                            <div className={classes.Text}>
                                <HOne>ثبت نام آغاز شد</HOne>
                                <p>پیش دبستانی / دبستان / دبیرستان دوره اول و دوم</p>
                                <LinkOne style={{marginTop: '1rem'}} to="/school/lessons">اطلاعات بیشتر</LinkOne>
                            </div>
                            <img src={LandingImage} alt="landing"/>
                        </div>

                        <div className={classes.Item}>
                            <img className={classes.IMG} src={imageTwo} alt="students graduating"/>
                            <p>پیش دبستانی / دبستان / دبیرستان دوره اول و دوم</p>
                        </div>

                        <div className={classes.Item}>
                            <img className={classes.IMG} src={image} alt="a pair of glasses"/>
                            <p className="legend">hello</p>
                            </div>
                            
                            </Carousel>
                        </div> */}
                <div className={classes.CarouselWrapper}>
                    <Carousel
                        className={classes.Carousel}
                        value={value}
                        slides={slides}
                        onChange={slideOnChangeHandler}
                        plugins={[
                            'infinite',
                            {
                                resolve: arrowsPlugin,
                                options: {
                                  arrowLeft: <button className={classes.CarouselButtonLeft}><IoIosArrowBack color="#000000" fontSize="20px"/></button>,
                                  arrowLeftDisabled: <button disabled><IoIosArrowBack fontSize="20px"/></button>,
                                  arrowRight: <button className={classes.CarouselButtonRight}><IoIosArrowForward fontSize="20px"/></button>,
                                  arrowRightDisabled: <button disabled><IoIosArrowForward fontSize="20px"/></button>,
                                  addArrowClickHandler: true,
                                }
                              }
                            ]} />
                        <Dots
                            number={thumbnails.length}
                            thumbnails={thumbnails}
                            value={value}
                            onChange={slideOnChangeHandler}
                            number={slides.length}/>
                        {/* <img src={image} alt="a pair of glasses"/>
                        <img src={imageTwo} alt="a pair of glasses"/>
                    </Carousel> */}
                </div>
                
            </div>
        </section>
    )
}

export default SectionOne;