import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import classes from './Gallery.module.css';
import { Albums } from './Albums/Albums';
import { SchoolYears } from './SchoolYears/SchoolYears';
import { Album } from './Album/Album';

const Gallery = props => {

    return (
        <div className={classes.Gallery}>
            <div className={classes.Wrapper}>
                <Switch>
                    <Route path="/school/gallery/:year/:albumID" component={Album}/>
                    <Route path="/school/gallery/:year" component={Albums}/>
                    <Route path="/school/gallery" component={SchoolYears} />
                </Switch>
            </div>
        </div>
    )
}

export { Gallery }