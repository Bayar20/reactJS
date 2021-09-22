import '../styles/login.scss';
import firebase, { auth }  from '../firebase'
import { useContext, useEffect, useState }from 'react'
import Loading from './loading'
import AuthContext from './AuthContext'
import {useHistory} from 'react-router-dom'

const Login = () => {
    const { user } = useContext(AuthContext);
    const [input, setInput] = useState('');
    const [confirmCode, setConfirmCode] = useState('');
    const [sentCode, setSentCode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        if (user.uid) {
            history.push('/')
        }
    }, [user, history])

    useEffect(() => {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('login-button', {
            'size': 'invisible',
          });
    }, [])
   
    const sendConfirmCode = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        try {
            const appVerifier = window.recaptchaVerifier;
            window.confirmationResult = await auth.signInWithPhoneNumber(`+976 ${input}`, appVerifier);
            setSentCode(true)
        } catch (e) {
            if(e.code === 'auth/invalid-phone-number'){alert('Not a valid phone number!')}
            console.log(e)
            setInput('')
        } 
        setIsLoading(false)
    }

    const login = async () => {
        try {
            await window.confirmationResult.confirm(confirmCode);
        } catch (e) {
            console.log(e)
            alert('Wrong code')
        }
    }

    return (
        <div className="container white-text #00BBFF">
            <div className="row"></div>
            <div className="row"></div>
                <div className="row center">
                    <h4>Please login first</h4> 
                </div>
                <div className="row">
                    <div className="input-field col s4 offset-s4 white-text">
                        <i className="material-icons prefix">account_circle</i>
                        <input value={input} onChange={(event) => setInput(event.target.value)}  id="phoneNumber" type="text" className="validate"/>
                        <span className="helper-text">Please enter a phone number</span>
                        <label for="phoneNumber"> Phone Number</label>
                    </div>
                </div>

                <div id='login-button'></div>

                {
                    isLoading ? <Loading /> : <></>
                }
                {
                    sentCode ? (
                        <div>
                            <div className="row center">
                                <div className="input-field col s4 offset-s4">
                                    <i className="material-icons prefix">lock_open</i>
                                    <input onChange={(event) => setConfirmCode(event.target.value)} id="phonecode" type="text"/>
                                    <label for="phonecode">Verification Code</label>
                                </div>
                                
                            </div>
                            <div className="row center">
                                <button className="waves-effect waves-light btn" to="home" onClick={login}>Log in</button>
                            </div>
                        </div>
                    )
                    :
                    <div className="row center">
                        <div className="input-field col s6 offset-s3">
                            <button className="waves-effect waves-light btn" onClick={sendConfirmCode}> Get Verification Code </button>
                        </div>
                    </div>
                }   
        </div>
    )
}

export default Login

