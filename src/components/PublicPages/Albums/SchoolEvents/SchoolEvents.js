import classes from './SchoolEvents.module.css';
import { EventFolder } from '../Folder/Folder';

const SchoolEvents = props => {
    console.log(props);
    return (
        <div className={classes.EventsWrapper}>
            <EventFolder path="/school/albums/97/274864" event="راهپیمایی 22 بهمن" />
            <EventFolder path="/school/albums/96/274864" event="گزارش تصویری کلاس های آنلاین دوره دوم" />
            <EventFolder path="/school/albums/95/274864" event="دیداراولیا با دبیران دی" />
            <EventFolder path="/school/albums/94/274864" event="نمایشگاه روزنامه های انقلاب" />
            <EventFolder path="/school/albums/94/274864" event="مسابقه طناب کشی" />
        </div>
    )
}

export { SchoolEvents }