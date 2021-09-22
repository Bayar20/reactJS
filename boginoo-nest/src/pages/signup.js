import React, { useContext, useState } from 'react'
import firebase from '../firebase'
import { Layout, Button, IconDash, IconEndBracket, IconStartBracket, FormInput } from '../components';
import AuthContext from '../providers/auth-provider';

export const Signup = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const { user, setUser } = useContext(AuthContext)

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password !== passwordConfirm ){
            alert('Нууц үгс тохирохгүй байна');
            setPasswordConfirm('')
            setPassword('')
            return
        }
        setIsLoading(true);
        try {
            const credential = firebase.auth.EmailAuthProvider.credential(email, password);
            const linkedUser = await user.linkWithCredential(credential)
            console.log('linkedUser', linkedUser)
            setUser({...user, ...linkedUser.user} )
        } catch (e) {
            window.alert(e.message)
            setPasswordConfirm('')
            setPassword('')
        }    
        setIsLoading(false)
    }

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)
    const handlePasswordConfirmChange = (e) => setPasswordConfirm(e.target.value)
    // const handleUsernameChange = (e) => setUsername(e.target.value)

    return (
        <Layout>
            <div className='h100 flex justify-center'>
                <form className='form w-8 flex-col justify-center items-center' onSubmit={ onSubmit }>
                    <div className='flex justify-center items-center'>
                        <IconStartBracket />
                        <IconDash />
                        <IconEndBracket />
                    </div>
                    <div className='font-lobster c-primary fs-30 lh-32 justify-center flex'>
                        Boginoo
                    </div>
                    <div className='font-ubuntu fs-20 lh-23 bold c-primary'>Бүртгэл</div>
                    {/* <FormInput label='Хэрэглэгчийн нэр' type='text' placeholder='username' className='h-5 w-8' value={username} onChange={handleUsernameChange}/> */}
                    <FormInput label='Цахим хаяг' type='email' placeholder='mail@domain.com' className='h-5 w-8' value={email} onChange={handleEmailChange}/>
                    <FormInput label='Нууц үг' type='password' placeholder='password' className='h-5 w-8' value={password} onChange={handlePasswordChange}/>
                    <FormInput label='Нууц үгээ давтана уу' type='password' placeholder='password' className='h-5 w-8' value={passwordConfirm} onChange={handlePasswordConfirmChange}/>
                    
                    <Button className="font-ubuntu w-8 fs-20 lh-23 mt-4 bold c-default h-5 ph-4 b-primary" disabled={ isLoading }>Бүртгүүлэх</Button>
                </form>
            </div>
        </Layout>
    )
}