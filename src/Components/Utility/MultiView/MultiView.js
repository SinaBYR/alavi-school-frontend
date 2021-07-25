import { useState } from 'react';
import { MdViewList, MdViewModule } from 'react-icons/md';
import HTwo from '../../Utility/UI/Headings/HTwo/HTwo';
import classes from './MultiView.module.css';

const MultiView = props => {
    const [view, setView] = useState('module');

    const changeViewHandler = e => {
        setView(e.target.value);
        console.log(e.target.value)
    }


    console.log(view);
    return (
        <div className={classes.MultiView}>
            <div className={classes.Wrapper}>
                <div className={classes.Header}>
                    {/* <HTwo>{props.title}</HTwo> */}
                    <HTwo>تصاویر</HTwo>

                    <div className={classes.Group} onChange={changeViewHandler}>
                        <div className={[classes.Control, view === 'module' ? classes.Checked : null].join(' ')}>
                            <MdViewModule color={view === 'module' ? "#ffb62d" : "#f4f4f4"} fontSize="1.5rem"/>
                            <input
                                className={classes.Radio}
                                type="radio"
                                name="view"
                                value="module"/>
                        </div>
                        <div className={[classes.Control, view === 'list' ? classes.Checked : null].join(' ')}>
                            <MdViewList color={view === 'list' ? "#ffb62d" : "#f4f4f4"} fontSize="1.5rem"/>
                            <input
                                className={classes.Radio}
                                type="radio"
                                name="view"
                                value="list"/>
                        </div>
                    </div>
                </div>
                {/* {props.children} */}
                <div className={classes.Content}>
                    <div className={classes.Item}></div>
                    <div className={classes.Item}></div>
                    <div className={classes.Item}></div>
                    <div className={classes.Item}></div>
                    <div className={classes.Item}></div>
                    <div className={classes.Item}></div>
                    <div className={classes.Item}></div>
                    <div className={classes.Item}></div>
                </div>
            </div>
        </div>
    )
}

export default MultiView;