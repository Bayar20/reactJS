import '../styles/profile.scss';
import { Link } from 'react-router-dom';
import { auth, firestore }  from '../firebase'
import { useEffect, useContext, useState } from 'react'
import profilePic from '../assets/default.jpeg'
import AuthContext from './AuthContext';

const Profile = () => {
    const {user, setUser} = useContext(AuthContext)
    const [profile, setProfile] = useState({
        username: '',
        age: '',
    })
    const [isLoading, setIsLoading] = useState(false);
    const [isHidden, setIsHidden] = useState(true)

    useEffect(() => {
        setProfile((profile) => {
            return {
                ...profile,
                ...user,
            }
        })
    }, [user])

    const logout = async () => {
        try {
            await auth.signOut()
        } catch (error) {
            console.log(error)
        }
    }

    const onFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        try {
            console.log("line 25", user.uid)
            await firestore.doc(`users/${user.uid}`).set(profile)
            setUser(profile)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        } finally {
            window.alert("Profile updated!")
        }
    }

    const handleInputChange = (field) => {
        return (e) => {
            setProfile({
                ...profile,
                [field]: e.target.value,
            })
        }
    }

    return (
        <div className="container profile">
            <div className="row"></div>
                <div className="row right">
                    <button className="waves-effect waves-light btn" onClick={logout}>Sign Out</button>
                </div>

                <div className="middle">
                    <div className="row" />
                    <div className="row" >
                        <div className="col s2 offset-s5">
                            <div className="card">
                                <div className="card-image">
                                    <img src={profilePic} alt="profile"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <form className="col offset-s3 s6 center blue-text" onSubmit={onFormSubmit}>
                            <div className="row">
                                Username:
                                    <div className="input-field inline">
                                        <input id="username" type="text" className="white-text" defaultValue={profile.username} onChange={handleInputChange('username')} />
                                    </div>
                            </div>
                            <div className="row">
                                Age:
                                    <div className="input-field inline">
                                        <input id="username" type="text" className="white-text" defaultValue={profile.age} 
                                        onChange={handleInputChange('age')}/>
                                    </div>
                            </div>
                            <div className="row blue-text">
                                <div className="center">
                                    Location share:  
                                    <div className="input-field inline">
                                        <div className="switch">
                                            <label>
                                            Off
                                            <input type="checkbox" onChange={() => setIsHidden(!isHidden)}  />
                                            <span className="lever"></span>
                                            On
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                isLoading 
                                ? 
                                <> 
                                    <div className="preloader-wrapper active">
                                        <div className="spinner-layer spinner-red-only">
                                        <div className="circle-clipper left">
                                            <div className="circle"></div>
                                        </div><div className="gap-patch">
                                            <div className="circle"></div>
                                        </div><div className="circle-clipper right">
                                            <div className="circle"></div>
                                        </div>
                                        </div>
                                    </div>
                                </>
                                : 
                                <></>
                            }

                            <div className="row center">
                                <button type="submit" className="btn-medium btn">Save</button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="row">
                    <div className="col s4 offset-s4 center white-text">
                        
                            <Link to="addfriend" className="btn-floating btn-large blue waves-effect waves-light left">
                                <i className="large material-icons">add</i>
                            </Link>
                            <Link to="home" className="btn-floating btn-large blue waves-effect waves-light center">
                                <i className="large material-icons">map</i>
                            </Link>
                            <Link to="profile" className="btn-floating btn-large blue waves-effect waves-light right">
                                <i className="large material-icons">account_circle</i>
                            </Link>
                    </div>
                </div>
        </div>
    )
}

export default Profile

