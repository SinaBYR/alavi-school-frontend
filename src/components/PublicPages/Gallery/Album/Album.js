import classes from './Album.module.css';
import image from '../../../../assets/kitten.jpg';
import imageOne from '../../../../assets/bird.jpg';
import { Carousel } from '../../../Utility/Carousel/Carousel'

const Album = props => {
    console.log(props);

    const data = [image, imageOne]

    const displayedImages = data.map(src => {
        return (
            <div className={classes.ImageWrapper} key={src}>
                <img className={classes.Image} src={src} alt="kitten" />
            </div>
        )
    });

    const openModalHandler = e => {
        if(e.target.parentNode === 'ImageWrapper'){
            console.log(e);
        }
    }

    return (
        <div className={classes.Album}>
            <h2 style={{textAlign: 'center'}}>راهپیمایی 22 بهمن</h2>
            <div className={classes.Carousel}>
                {/* <Carousel slides /> */}
            </div>
            <div className={classes.Content} onClick={openModalHandler}>
                {displayedImages}
            </div>
        </div>
    )
}

export { Album }