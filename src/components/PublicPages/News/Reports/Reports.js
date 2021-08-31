import classes from './Reports.module.css';
import { CardTwo, Spinner } from '../../../Utility/UI';
import image from '../../../../assets/kitten.jpg';
import imageOne from '../../../../assets/bird.jpg';
import imageTwo from '../../../../assets/bird-1.jpg';
import imageThree from '../../../../assets/monkey.jpg';
import { useEffect, useRef, useState } from 'react';
import { fetchNews, useFetchNewsQuery } from '../../../../redux/features/public/public-api-slice';
import { useDispatch, useSelector } from 'react-redux';
import { newsSlice } from '../../../../redux/features/public/public-api-slice';

const Reports = props => {
    // const [reports, setReports] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const loader = useRef(null);

    // const handleObserver = () => {
    //     setTimeout(() => {
    //         setLoading(true);
    //         const data = [
    //             {title: 'راهپیمایی 22 بهمن', src: image, link: '274698', date: '1399/11/24', views: 264},
    //             {title: 'روز دانش آموز', src: imageOne, link: '274698', date: '1399/06/04', views: 197},
    //             {title: 'برنامه امتحانات نوبت اول', src: imageTwo, link: '274698', date: '1399/04/12', views: 213},
    //             {title: 'جلسه دیدار با اولیا', src: imageThree, link: '274698', date: '1399/01/29', views: 357}
    //         ]
    //         setLoading(false);
    //         setReports(data);
    //     }, 2000)
    // }

    // useEffect(() => {
    //     handleObserver();
    // }, [])


    // let displayedReports = <Spinner />;

    // if(!loading && reports.length) {
    //     displayedReports = (
    //         <div className={classes.ReportsWrapper}>
    //             {
    //                 reports.map(report => {
    //                     return (
    //                         <CardTwo
    //                             title={report.title}
    //                             src={report.src}
    //                             path={"/school/news/" + report.link}
    //                             views={report.views}
    //                             date={report.date}
    //                             key={report.link}
    //                         />
    //                     )
    //                 })
    //             }
    //         </div>
    //     )
    // }

    // useEffect(() => {
    //     const observer = new IntersectionObserver(handleObserver, {
    //         root: null,
    //         rootMargin: '16px',
    //         threshold: 1
    //     })
    //     if(loader.current) {
    //         observer.observe(loader.current)
    //     }
    // }, [])


    // --------------------------------------------------------------------------------------------------------------------------

    // const { data = [], isFetching, isLoading } = useFetchNewsQuery();

    // let displayedReports = <Spinner />;
    // if(!isLoading) {
    //     displayedReports = (
    //         <div className={classes.ReportsWrapper}>
    //             {data.map(({id, userId, title, completed}) => (
    //                 // <div key={id}>
    //                 //     <p>{title}</p>
    //                 //     <p>{String(completed)}</p>
    //                 // </div>
    //                 <CardTwo
    //                     title={title}
    //                     // src={report.src}
    //                     path={"/school/news/" + id}
    //                     views={id * 4 + 137}
    //                     date={new Date().toLocaleString()}
    //                     key={id}
    //                 />
    //             ))}
    //         </div>
    //     )
    // }

    // --------------------------------------------------------------------------------------------------------------------------
    const dispatch = useDispatch();
    const { data, isLoading } = useSelector((state) => state.news);

    useEffect(() => {
        dispatch(fetchNews())
    }, [])

    let displayedReports = <Spinner />;
    if(data.length) {
        displayedReports = (
            <div className={classes.ReportsWrapper}>
                {data.map(({id, userId, title, completed}) => (
                    // <div key={id}>
                    //     <p>{title}</p>
                    //     <p>{String(completed)}</p>
                    // </div>
                    <CardTwo
                        title={title}
                        // src={report.src}
                        path={"/school/news/" + id}
                        views={id * 4 + 137}
                        date={new Date().toLocaleString()}
                        key={id}
                    />
                ))}
            </div>
        )
    }

    return (
        <div className={classes.Reports}>
            <h2 style={{textAlign: 'center'}}>اخبار مجموعه</h2>
            <div>number of news fetched: {data.length}</div>
            <div className={classes.Content}>
                {displayedReports}
            </div>
            {/* <div className={classes.Loader} ref={loader}></div> */}
        </div>
    )
}

export { Reports }