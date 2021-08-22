import classes from './SectionOne.module.css';
import React from 'react';
import image from '../../../../assets/bird.jpg';
import imageOne from '../../../../assets/bird-1.jpg';
import imageTwo from '../../../../assets/kitten.jpg';
import imageThree from '../../../../assets/nature-1.jpg';
import imageFour from '../../../../assets/nature-2.jpg';
import { Carousel } from '../../../Utility/Carousel/Carousel';

const SectionOne = props => {

    const slides = [
        (<img src={image} alt="a pair of glasses"/>),
        (<img src={imageOne} alt="a pair of glasses"/>),
        (<img src={imageTwo} alt="a pair of glasses"/>),
        (<img src={imageThree} alt="a pair of glasses"/>),
        (<img src={imageFour} alt="a pair of glasses"/>),
    ]
    return (
        <section className={classes.SectionOne}>
            <div className={classes.Wrapper}>
                <Carousel slides={slides} thumbnail arrows infinite interval="5000" />
                
            </div>
        </section>
    )
}

export default SectionOne;