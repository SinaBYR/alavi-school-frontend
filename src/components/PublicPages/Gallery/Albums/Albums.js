import classes from './Albums.module.css';
import { AlbumFolder } from '../Folder/Folder';

const Albums = props => {
    console.log(props);
    return (
        <div className={classes.Albums}>
            <h2 style={{textAlign: 'center'}}>تصاویر سال تحصیلی {props.match.params.year}</h2>
            <div className={classes.AlbumsWrapper}>
                <AlbumFolder path="/school/gallery/01-1400/914478" album="راهپیمایی 22 بهمن" />
                <AlbumFolder path="/school/gallery/01-1400/276864" album="گزارش تصویری کلاس های آنلاین دوره دوم" />
                <AlbumFolder path="/school/gallery/01-1400/124762" album="دیدار اولیا با دبیران دی" />
                <AlbumFolder path="/school/gallery/01-1400/322474" album="نمایشگاه روزنامه های انقلاب" />
                <AlbumFolder path="/school/gallery/01-1400/987437" album="مسابقه طناب کشی" />
            </div>
        </div>
    )
}

export { Albums }