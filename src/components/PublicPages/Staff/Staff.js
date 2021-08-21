import { Redirect, Route, Switch } from 'react-router-dom';
import Academic from './Academic/Academic';

const Staff = props => {
    return (
        <div>
            <Switch>
                <Route path="/school/staff/academic" component={Academic}/>
                <Route path="/school/staff/administrative" />
                <Redirect to="/school"/>
            </Switch>
        </div>
    )
}

export default Staff;