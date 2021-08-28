import classes from './Album.module.css';
import image from '../../../../assets/kitten.jpg';
import imageOne from '../../../../assets/bird.jpg';
import { Carousel } from '../../../Utility/Carousel/Carousel'
import { useState } from 'react';

const Album = props => {
    const [showcaseURL, setShowcaseURL] = useState(null);
    // console.log(props);

    const data = [image, imageOne, imageOne, imageOne, imageOne, imageOne, imageOne, imageOne, imageOne, imageOne, imageOne, imageOne]

    const displayedImages = data.map(src => {
        return (
            <div className={classes.ThumbnailWrapper} key={src}>
                <img className={classes.Thumbnail} src={src} alt="kitten" />
            </div>
        )
    });

    const openModalHandler = e => {
        if(e.target.tagName !== 'IMG'){
            return console.log(e);
        }

        console.log(e.target.attributes.src.value);
        setShowcaseURL(e.target.attributes.src.value)
    }

    return (
        <div className={classes.Album}>
            <div className={classes.Wrapper}>
                <h2 style={{textAlign: 'center'}}>راهپیمایی 22 بهمن</h2>
                <div className={classes.Showcase}>
                    {
                        data.length &&  
                        <>
                            <div className={classes.Description}>ahahahahahahah</div>
                            <img src={showcaseURL || data[0]} alt="showcase"/>
                        </>
                        
                    }
                </div>
                <div className={classes.ThumbnailsContainer} onClick={openModalHandler}>
                    {displayedImages}
                </div>
            </div>
        </div>
    )
}

export { Album }