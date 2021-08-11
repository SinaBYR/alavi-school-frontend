import { useState, useEffect, useRef } from 'react'; 
import classes from './ContactUs.module.css';
import { FaTelegram } from 'react-icons/fa';
import HThree from '../../Utility/UI/Headings/HThree/HThree';
import HTwo from '../../Utility/UI/Headings/HTwo/HTwo';
import { SocialIcon } from 'react-social-icons';
import { Input, Textarea } from '../../Utility/Inputs';
import { withFormik, Form } from 'formik';
import mapboxgl from 'mapbox-gl';
// import '../../../../node_modules/mapbox-gl/dist/mapbox-gl.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import '../../../../node_modules/mapbox-gl/dist/svg/mapboxgl-ctrl-compass.svg';
import 'mapbox-gl/dist/svg/mapboxgl-ctrl-geolocate.svg';
import 'mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-in.svg';
import 'mapbox-gl/dist/svg/mapboxgl-ctrl-zoom-out.svg';


// mapboxgl.accessToken = 'sk.eyJ1Ijoic2luYWJ5ciIsImEiOiJja3M3NmJqd3AwNDFvMnVsdTdmb3lmejE4In0.rNA0ix0GhZVxlk1OVWwzxQ';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2luYWJ5ciIsImEiOiJja3M3ajRhZmgwNzZuMndwZjNnY3pxZm5jIn0.dAYbHcxaJQOM8mGL7kGbOQ';

mapboxgl.setRTLTextPlugin(
    'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
    null,
    true // Lazy load the plugin
);

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

const ContactUs = props => {
    const schoolBranch = SCHOOL_IDENTIFIERS[localStorage.getItem('branch')];
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(-70.9);
    const [lat, setLat] = useState(42.35);
    const [zoom, setZoom] = useState(14);

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
                <HThree style={{textAlign: 'center'}}>با ما در ارتباط باشید</HThree>
                <div className={classes.Content}>
                    <div className={classes.SocialLinks}>
                        <a href="#" target="_blank" className={classes.Item}>
                            <p>کانال تلگرام</p>
                            {/* <SocialIcon style={{width: '30px', height: '30px'}} url="telegram.me"/> */}
                        </a>
                        <a href="#" target="_blank" className={classes.Item}>
                            <p>صفحه اینستاگرام</p>
                            {/* <SocialIcon style={{width: '30px', height: '30px'}} url="instagram.com"/> */}
                        </a>
                    </div>
                    <Form className={classes.Form}>
                        <Input label="نام و نام خانوداگی" config={{type: 'text', name: 'fullName'}}/>
                        <Input label="آدرس ایمیل" config={{type: 'email', name: 'email'}}/>
                        <Textarea label="پیام شما" config={{name: 'message'}}/>
                        {/* <button>Submit</button> */}
                    </Form>
                    <div className={classes.Map} ref={mapContainer}>
                        <div className={classes.Sidebar}>Zoom: {zoom}</div>
                    </div>
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