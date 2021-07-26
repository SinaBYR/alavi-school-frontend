import classes from './LoadingBar.module.css';
import { useEffect, useRef, useState } from "react"
import { Switch, useLocation } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';

const CustomSwitch = ({ children }) => {
    const [progress, setProgress] = useState(0);
    const [prevLoc, setPrevLoc] = useState("");
    const location = useLocation();

    useEffect(() => {
        setPrevLoc(location.pathname);
        setProgress(0);
    }, [location])

    useEffect(() => {
        setProgress(100);
    }, [prevLoc])

    return (
        <>
            <LoadingBar
                className={classes.LoadingBar}
                color="#ffb62d"
                progress={progress}
                onLoaderFinished={() => setProgress(0)} />
            <Switch>
                {children}
            </Switch>
        </>
    )
}

export default CustomSwitch;