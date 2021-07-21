import classes from './SectionOne.module.css';

const SCHOOL_IDENTIFIERS = {
    1: 'دبستان میدان ساعت',
    2: 'دبستان ویلاشهر',
    3: 'دبیرستان دوره اول'
}

const SectionOne = props => {
    return (
        <section className={classes.SectionOne}>
            <div className={classes.Wrapper}>
                خوش آمدید
                {SCHOOL_IDENTIFIERS[window.location.search.slice(-1)]}

            </div>
        </section>
    )
}

export default SectionOne;