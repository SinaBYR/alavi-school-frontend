import { useEffect, useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import './App.css';
import Lobby from './Components/Lobby/Lobby';
import School from './Components/School/School';

const App = () => {
    const location = useLocation();
    const [displayLocation, setDisplayLocation] = useState(location);
    const [transitionStage, setTransitionStage] = useState('fadeIn');

    useEffect(() => {
        if(displayLocation !== location) {
            setTransitionStage('fadeOut')
        }
    }, [location, displayLocation])

    const animationEndHandler = () => {
        if(transitionStage === 'fadeOut') {
            setTransitionStage('fadeIn');
            setDisplayLocation(location);
        }
    }

    return (
        <div className={['App', transitionStage].join(' ')} onAnimationEnd={animationEndHandler}>
            <Switch location={displayLocation}>
                <Route path="/school" component={School} />
                <Route exact path="/" component={Lobby} />
                <Redirect from="*" to='/404' />
            </Switch>
        </div>
    );
}

export default App;