import { Redirect, Route, Switch } from 'react-router-dom';
import Academic from './Academic/Academic';
import { Administrative } from './Administrative/Administrative';

const Staff = props => {
    return (
        <div>
            <Switch>
                <Route path="/school/staff/academic" component={Academic}/>
                <Route path="/school/staff/administrative" component={Administrative}/>
                <Redirect to="/school"/>
            </Switch>
        </div>
    )
}

export default Staff;