import { useEffect, useState } from 'react';
import { Switch, Route, useLocation, Redirect } from 'react-router-dom';
import './App.css';
import Lobby from './components/Lobby/Lobby';
import School from './containers/School/School';

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

    return (
        <div className={['App', transitionStage].join(' ')} onAnimationEnd={animationEndHandler}>
            <Switch location={displayLocation}>
                {localStorage.getItem('branch') && <Route path="/school" component={School} />}
                <Route exact path="/" component={Lobby} />
                <Redirect to="/"/>
                <Redirect from="*" to='/404' />
            </Switch>
        </div>
    );
}

export default App;