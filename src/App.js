import { useEffect, useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import './App.css';
import Lobby from './components/Lobby/Lobby';
import CustomSwitch from './components/Utility/CustomSwitch/CustomSwitch';
import School from './containers/School/School';
import LoadingBar from 'react-top-loading-bar';

const App = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fadeIn');

    useEffect(() => {
        if(displayLocation !== location) {
            setTransitionStage('fadeOut')
        }
    }, [location])

    const animationEndHandler = () => {
        if(transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn');
            setDisplayLocation(location);
        }
    }
    
    console.log('[App]: Mounted')
    return (
        <div className={['App'].join(' ')} onAnimationEnd={animationEndHandler}>
            <Switch>
                {localStorage.getItem('branch') && <Route path="/school" component={School} />}
                <Route exact path="/" component={Lobby} />
                <Redirect to="/"/>
                <Redirect from="*" to='/404' />
            </Switch>
        </div>
    );
}

export default App;