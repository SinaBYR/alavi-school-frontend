import classes from './SchoolYears.module.css';
import { useEffect, useState } from "react";
import { YearFolder } from "../Folder/Folder";

const SchoolYears = props => {
    const [years, setYears] = useState([]);

    useEffect(() => {
        // ... fetch data
        // await some data
        const finalData = [
            <YearFolder path="/school/albums/01-1400" year="00-01" key={Math.random()}/>,
            <YearFolder path="/school/albums/00-1399" year="99-00" key={Math.random()} />,
            <YearFolder path="/school/albums/99-1398" year="98-99" key={Math.random()} />,
            <YearFolder path="/school/albums/98-1397" year="97-98" key={Math.random()} />,
            <YearFolder path="/school/albums/97-1396" year="96-97" key={Math.random()} />,
            <YearFolder path="/school/albums/96-1395" year="95-96" key={Math.random()} />,
            <YearFolder path="/school/albums/95-1394" year="94-95" key={Math.random()} />
        ]
        setYears(finalData);
    }, [])

    return (
        <div className={classes.SchoolYears}>
            <h2 style={{textAlign: 'center'}}>آلبوم تصاویر</h2>
            <div className={classes.YearsWrapper}>
                {years}
            </div>
        </div>
    )
}

export { SchoolYears }