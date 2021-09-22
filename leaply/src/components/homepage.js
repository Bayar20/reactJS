import '../styles/homepage.scss';
import { useEffect, useRef, useState, useContext } from 'react'
import { Link } from 'react-router-dom';   
import { firestore }  from '../firebase' 
import AuthContext from './AuthContext'

const GOOGLE_API_KEY = 'AIzaSyA5Qe8yxW9GvHzU4nmgK3eZaIjIoXb3JrU'
const ulaanbaatar = { lat: 47.91679, lng: 106.91365 }

const Home = () => {
    const { user } = useContext(AuthContext);
    const mapElementRef = useRef();
    const mapRef = useRef();
    const [markers, setMarkers] = useState([]);

    useEffect (() => {
        const watchId = navigator.geolocation.watchPosition(({ coords: { latitude: lat, longitude: lng }, timestamp })=> {
            firestore.collection('tracking').doc(user.uid).set({
                position: {lat, lng},
                timestamp,
                username: user.username,
                image: user.image || 'https://developers.google.com/maps/images/maps-icon.svg'
            })
        }, console.error, { 
            maximumAge: 10000,
        })

        return () => {
            window.navigator.geolocation.clearWatch(watchId);
        }
    }, [user])

    useEffect(() => {
        let markerObjects = [];
        if(mapRef.current){
            markerObjects = markers.map((item) => {
                return new window.google.maps.Marker({
                    position: { lat: item.position.lat, lng: item.position.lng },
                    label: item.username, 
                    map: mapRef.current,
                    icon: {
                        url: item.image || 'https://developers.google.com/maps/images/maps-icon.svg',
                        scaledSize: new window.google.maps.Size(30,30),
                        origin: new window.google.maps.Point(0, 0),
                        anchor: new window.google.maps.Point(20, 20)
                    }
                })
            });
        }
        return () => {
            markerObjects.forEach((item) => 
                    item.setMap(null)
            )
        }
    }, [markers])

    const onGoogleMapLoad = () => {
        mapRef.current = new window.google.maps.Map(mapElementRef.current, {
            center: ulaanbaatar,
            zoom: 10,
        });

        firestore.collection("tracking")
            .onSnapshot((querySnapshot) => {
                    const markerList = [];
                    querySnapshot.forEach((doc) => {
                        // doc.data() is never undefined for query doc snapshots
                    markerList.push(doc.data())
                })
                setMarkers(markerList);  
            })
    }

    useEffect(() => {
        if (window.google) {
            onGoogleMapLoad();
            return
        }
            const googleMapScript = document.createElement('script');
            googleMapScript.src=`https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&libraries=places`;
            googleMapScript.async = true;
            googleMapScript.id = "googleMapScript"
            window.document.body.appendChild(googleMapScript);
            googleMapScript.addEventListener('load', onGoogleMapLoad);
    }, [])

    

    return (
        <div className="container">
            <div className="homepage screen center">
                <div ref={ mapElementRef } className="map"></div>
                    <div className="row"></div>
                    <div className="row">
                        <div id="icons" className="col s10 offset-s1 center white-text">
                                <Link to="addfriend" className="btn-floating btn-large blue waves-effect waves-light">
                                    <i className="large material-icons">add</i>
                                </Link>
                                <Link to="home" className="btn-floating btn-large blue waves-effect waves-light">
                                    <i className="large material-icons">map</i>
                                </Link>
                                <Link to="profile" className="btn-floating btn-large blue waves-effect waves-light">
                                    <i className="large material-icons">account_circle</i>
                                </Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}


export default Home