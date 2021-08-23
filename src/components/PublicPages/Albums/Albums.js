import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import classes from './Albums.module.css';
import { YearFolder, EventFolder } from './Folder/Folder';

const Albums = props => {
    const [years, setYears] = useState([]);



    useEffect(() => {
        // ... fetch data
        // await some data
        const finalData = [
            <YearFolder path="/school/albums/00" year="00-01" key={Math.random()}/>,
            <YearFolder path="/school/albums/99" year="99-00" key={Math.random()} />,
            <YearFolder path="/school/albums/98" year="98-99" key={Math.random()} />,
            <YearFolder path="/school/albums/97" year="97-98" key={Math.random()} />,
            <YearFolder path="/school/albums/96" year="96-97" key={Math.random()} />,
            <YearFolder path="/school/albums/95" year="95-96" key={Math.random()} />,
            <YearFolder path="/school/albums/94" year="94-95" key={Math.random()} />
        ]
        setYears(finalData);
    }, [])

    let displayedContent;
    if(years.length) {
        displayedContent = (
            <div className={classes.YearsWrapper}>
                {years}
            </div>
        )
    }


    return (
        <div className={classes.Albums}>
            <div className={classes.Wrapper}>
                <Switch>
                    <Route path="/school/albums/:year/:albumID">
                        <h1>Hello</h1>
                    </Route>
                    <Route path="/school/albums/:year">
                        <div className={classes.Album}>
                            <div className={classes.EventsWrapper}>
                                <EventFolder path="/school/albums/97/274864" event="راهپیمایی 22 بهمن" />
                                <EventFolder path="/school/albums/96/274864" event="گزارش تصویری کلاس های آنلاین دوره دوم" />
                                <EventFolder path="/school/albums/95/274864" event="دیداراولیا با دبیران دی" />
                                <EventFolder path="/school/albums/94/274864" event="نمایشگاه روزنامه های انقلاب" />
                                <EventFolder path="/school/albums/94/274864" event="مسابقه طناب کشی" />
                            </div>
                        </div>
                    </Route>
                    <Route path="/school/albums">
                        <h2 style={{textAlign: 'center'}}>آلبوم تصاویر</h2>
                        {displayedContent}
                    </Route>
                </Switch>
                {/* <div className={classes.Content}>
                </div> */}
            </div>
        </div>
    )
}

export { Albums }