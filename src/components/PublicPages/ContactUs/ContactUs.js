import { useState, useEffect, useRef } from 'react'; 
import classes from './ContactUs.module.css';
import { FaInstagram, FaPhone, FaTelegram } from 'react-icons/fa';
import HThree from '../../Utility/UI/Headings/HThree/HThree';
import HTwo from '../../Utility/UI/Headings/HTwo/HTwo';
import { SocialIcon } from 'react-social-icons';
import { Input, Textarea } from '../../Utility/Inputs';
import { withFormik, Form } from 'formik';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { IoLocationSharp } from 'react-icons/io5';


// mapboxgl.accessToken = 'sk.eyJ1Ijoic2luYWJ5ciIsImEiOiJja3M3NmJqd3AwNDFvMnVsdTdmb3lmejE4In0.rNA0ix0GhZVxlk1OVWwzxQ';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// mapboxgl.setRTLTextPlugin(
//     'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
//     null,
//     true // Lazy load the plugin
// );

const SCHOOL_IDENTIFIERS = {
    1: 'دبستان میدان ساعت',
    2: 'دبستان ویلاشهر',
    3: 'دبیرستان دوره اول'
}
const SCHOOL_GEOCODES = {
    'دبستان میدان ساعت': [46.349950329329374, 38.034275872623354],
    'دبستان ویلاشهر': [46.349950329329374, 38.034275872623354],
    'دبیرستان دوره اول': [46.349950329329374, 38.034275872623354]
}
const SCHOOL_ADDRESSES = {
    'دبستان میدان ساعت': 'تبریز - ارتش جنوبی - میدان ساعت کوچه فهیمی - ساختمان علوی',
    'دبستان ویلاشهر': 'تبریز - ائل گولی - کوی ویلاشهر - انتهای خیابان گلها',
    'دبیرستان دوره اول': 'تبریز - ائل گولی - کوی ویلاشهر - انتهای خیابان گلها',
}
const SCHOOL_PHONE_NUMBERS = {
    'دبستان میدان ساعت': ['04135562524', '04135556002'],
    'دبستان ویلاشهر': ['04133821930'],
    'دبیرستان دوره اول': ['04133822513']
}

const ContactUs = props => {
    const schoolBranch = SCHOOL_IDENTIFIERS[localStorage.getItem('branch')];
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(14);

    console.log(process.env)

    useEffect(() => {
        
        if (map.current) {
            return; // initialize map only once
        }
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: SCHOOL_GEOCODES[schoolBranch],
            zoom: zoom,
        });

        map.current.addControl(new mapboxgl.NavigationControl({
            showCompass: true,
            showZoom: true
        }));

        const marker = new mapboxgl.Marker({
            color: "#ffb62d",
            anchor: 'center',
            scale: 1.5
            }).setLngLat(SCHOOL_GEOCODES[schoolBranch])
            .addTo(map.current);

        return () => {
            map.current.remove();
        }
    }, []);

    useEffect(() => {
        if (!map.current) {
            return;  // wait for map to initialize
        }
        map.current.on('move', () => {
            setZoom(map.current.getZoom().toFixed(1));
        })
    })



    return (
        <div className={classes.ContactUs}>
            <div className={classes.Wrapper}>
                <HThree style={{textAlign: 'center'}}>ارتباط با ما</HThree>
                <div className={classes.Content}>
                    <p style={{fontSize: '1.4rem', textAlign: 'center'}}>لطفا نظرات، سوالات، پیشنهادات و انتقادات خود را با ما درمیان بگذارید.</p>
                    <section className={classes.Section}>
                        <Form className={classes.Form}>
                            <Input label="نام و نام خانوداگی" config={{type: 'text', name: 'fullName'}}/>
                            <Input label="آدرس ایمیل" config={{type: 'email', name: 'email'}}/>
                            <Textarea label="متن پیام" config={{name: 'message'}}/>
                        </Form>
                    </section>

                    <section className={classes.Section}>
                        <div className={classes.Links}>
                            <a href="#" target="_blank" className={classes.Link}>
                                <p>کانال تلگرام</p>
                                <i><FaTelegram /></i>
                            </a>
                            <a href="#" target="_blank" className={classes.Link}>
                                <p>صفحه اینستاگرام</p>
                                <i><FaInstagram /></i>
                            </a>
                        </div>
                    </section>

                    <section className={classes.Section}>
                        <div className={classes.Address}>
                            <div className={classes.AddressItem}>
                                <div><IoLocationSharp style={{fontSize: "30px", margin: '0.5rem 0'}}/></div>
                                <div>{SCHOOL_ADDRESSES[schoolBranch]}</div>
                            </div>
                            <div className={classes.AddressItem}>
                                <div><FaPhone style={{fontSize: "30px", margin: '0.5rem 0'}}/></div>
                                {/* <div>04133822513</div> */}
                                <div>{SCHOOL_PHONE_NUMBERS[schoolBranch].join(' - ')}</div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={classes.Map} ref={mapContainer}>
                    <div className={classes.Zoom}>Zoom: {zoom}</div>
                </div>
            </div>
        </div>
    )
}

const options = {
    mapPropsToValues(props) {
        return {
            fullName: '',
            email: '',
            message: ''
        }
    },
    handleSubmit(values){
        console.log(values);
    }
}

const FormikContactUs = withFormik(options)(ContactUs);

export default FormikContactUs;