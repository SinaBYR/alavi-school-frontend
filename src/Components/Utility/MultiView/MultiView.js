import { useState } from 'react';
import { MdViewList, MdViewModule } from 'react-icons/md';
import HTwo from '../../Utility/UI/Headings/HTwo/HTwo';
import classes from './MultiView.module.css';

const MultiView = props => {
    const [view, setView] = useState('module');

    const changeViewHandler = view => {
        setView(view);
    }

    console.log(view);
    return (
        <div className={classes.MultiView}>
            <div className={classes.Header}>
                <HTwo>{props.title}</HTwo>
                <div className={classes.Controls}>
                    <select onChange={(e) => changeViewHandler(e.target.value)}>
                        <option value="list">
                            <MdViewList />
                        </option>
                        <option value="module">
                            <MdViewModule />
                        </option>
                    </select>
                </div>
            </div>
            <div className={classes.Wrapper}>
                {props.children}
            </div>
        </div>
    )
}

export default MultiView;