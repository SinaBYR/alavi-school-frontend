import classes from './LoadingBar.module.css';
import { useEffect, useRef, useState } from "react"
import { Switch, useHistory, useLocation } from "react-router-dom"
import LoadingBar from 'react-top-loading-bar';
import TopBarProgress from "react-topbar-progress-indicator"

TopBarProgress.config({
    barColors: {
      "0": "#ffb62d",
      "1.0": "#ffb62d"
    },
    shadowBlur: 5
  });

const CustomSwitch = ({ children }) => {
    // const [progress, setProgress] = useState(0);
    // const [prevLoc, setPrevLoc] = useState("");
    // const location = useLocation();

    // useEffect(() => {
    //     setPrevLoc(location.pathname);
    //     setProgress(0);
    // }, [location])

    // useEffect(() => {
    //     setProgress(100);
    // }, [prevLoc])

    
    const [progress, setProgress] = useState(false)
    const [prevLoc, setPrevLoc] = useState("")
    const location = useLocation()
    const history = useHistory();

    useEffect(() => {
        history.listen((location, action) => {
            window.scrollTo(0, 0)
        })
    })

    useEffect(() => {
        setPrevLoc(location.pathname)
        setProgress(true)
     }, [location])
  
     useEffect(() => {
        setProgress(false)
     }, [prevLoc])

     
    return (
        <>
            {/* <LoadingBar
                className={classes.LoadingBar}
                color="#ffb62d"
                progress={progress}
                onLoaderFinished={() => setProgress(0)} /> */}
            {progress && <TopBarProgress />}
            <Switch>
                {children}
            </Switch>
        </>
    )
}

export default CustomSwitch;