import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import classes from './Albums.module.css';
import { YearFolder, EventFolder } from './Folder/Folder';
import { SchoolEvents } from './SchoolEvents/SchoolEvents';
import { SchoolYears } from './SchoolYears/SchoolYears';

const Albums = props => {

    return (
        <div className={classes.Albums}>
            <div className={classes.Wrapper}>
                <Switch>
                    <Route path="/school/albums/:year/:albumID" />
                    <Route path="/school/albums/:year" component={SchoolEvents}/>
                    <Route path="/school/albums" component={SchoolYears} />
                </Switch>
            </div>
        </div>
    )
}

export { Albums }