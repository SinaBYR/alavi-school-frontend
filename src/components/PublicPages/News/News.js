import classes from './News.module.css';

import { Route, Switch } from 'react-router-dom';
import { Reports } from './Reports/Reports';
import { Report } from './Report/Report';

const News = props => {

    return (
        <div className={classes.News}>
            <div className={classes.Wrapper}>
               <Switch>
                   <Route path="/school/news/:reportID" component={Report}/>
                   <Route path="/school/news" component={Reports} />
               </Switch>
            </div>
        </div>
    )
}

export { News }