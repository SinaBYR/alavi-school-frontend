import classes from './Carousel.module.css';
import BrainhubeuCarousel, { arrowsPlugin, Dots, autoplayPlugin  } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { useState } from 'react';

const Carousel = ({ slides, thumbnail, arrows, infinite, interval }) => {

    const [value, setValue] = useState(0)

    const thumbnails = slides.map(thumbnail => {
        return (
            <div className={classes.Thumbnail}>{thumbnail}</div>
        )
    })

    const slideOnChangeHandler = value => {
        setValue(value)
    }

    let options = [
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
        },
        {
            resolve: autoplayPlugin,
            options: {
              interval: interval,
            }
        },
    ]

    if(!arrows) {
        options = options.filter(option => option.resolve !== arrowsPlugin);
    } else if (!interval) {
        options = options.filter(option => option.resolve !== autoplayPlugin);
    }

    return (
        <div className={classes.CarouselWrapper}>
            <BrainhubeuCarousel
                className={classes.Carousel}
                value={value}
                slides={slides}
                onChange={slideOnChangeHandler}
                plugins={options}/>
            {
                thumbnail && 
                <div className={classes.ThumbnailsWrapper}>
                    <Dots
                        number={thumbnails.length}
                        thumbnails={thumbnails}
                        value={value}
                        onChange={slideOnChangeHandler}
                        number={slides.length}/>
                </div>
            }
        </div>
    )
}

export { Carousel }