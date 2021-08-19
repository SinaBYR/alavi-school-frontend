import classes from './Map.module.css';
import mapboxgl from 'mapbox-gl';
import { useState, useEffect, useRef } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

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

const Map = props => {
    const schoolBranch = SCHOOL_IDENTIFIERS[localStorage.getItem('branch')];
    const mapContainer = useRef(null);
    const map = useRef(null);
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
            minZoom: 11,
            maxZoom: 16
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

        if (mapboxgl.getRTLTextPluginStatus() !== 'loaded') {
            mapboxgl.setRTLTextPlugin(
                'https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js',
            );
        }

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
        <div className={classes.Map} ref={mapContainer}>
            <div className={classes.Zoom}>Zoom: {zoom}</div>
        </div>
    )
}

export default Map;