import classes from './SchoolYears.module.css';
import { useEffect, useState } from "react";
import { YearFolder } from "../Folder/Folder";

const SchoolYears = props => {
    const [years, setYears] = useState([]);

    const finalData = [
        <YearFolder path="/school/gallery/1400-01" year="00-01" key={Math.random()}/>,
        <YearFolder path="/school/gallery/1399-00" year="99-00" key={Math.random()} />,
        <YearFolder path="/school/gallery/1398-99" year="98-99" key={Math.random()} />,
        <YearFolder path="/school/gallery/1397-98" year="97-98" key={Math.random()} />,
        <YearFolder path="/school/gallery/1396-97" year="96-97" key={Math.random()} />,
        <YearFolder path="/school/gallery/1395-96" year="95-96" key={Math.random()} />,
        <YearFolder path="/school/gallery/1394-95" year="94-95" key={Math.random()} />
    ]
    useEffect(() => {
        setTimeout(() => {
            setYears(finalData);
        }, 2000)
    }, [])

    return (
        <div className={classes.SchoolYears}>
            <h2 style={{textAlign: 'center'}}>آلبوم تصاویر</h2>
            <div className={classes.YearsWrapper}>
                {years.length ? years : 'loading'}
            </div>
        </div>
    )
}

export { SchoolYears }