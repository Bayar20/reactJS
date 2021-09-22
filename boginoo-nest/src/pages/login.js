import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Layout, Button, IconDash, IconEndBracket, IconStartBracket, FormInput } from '../components/';
import { auth } from '../firebase';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const history = useHistory();

    const signIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password)
            history.push('/')
        } catch (e) {
            window.alert(e.message)
        }
    }

    const handleEmailChange = (e) => setEmail(e.target.value)
    const handlePasswordChange = (e) => setPassword(e.target.value)

    return (
        <Layout>
            <div className='h100 flex justify-center'>
                <div className='form w-8 flex-col justify-center items-center'>
                    <div className='flex justify-center items-center'>
                        <IconStartBracket />
                        <IconDash />
                        <IconEndBracket />
                    </div>
                    <div className='justify-center flex'>
                        <Link to="/" className="font-lobster fs-36 lh-36 c-primary no-underline">Boginoo</Link>
                    </div>
                    <div className='font-ubuntu fs-20 lh-23 bold c-primary'>Нэвтрэх</div>
                    <FormInput label='Цахим хаяг' type='email' placeholder='mail@domain.com' className='h-5 w-8' value={email} onChange={handleEmailChange}/>
                    <FormInput label='Нууц үг' type='password' placeholder='password' className='h-5 w-8' value={password} onChange={handlePasswordChange}/>

                    <div className='w-8 flex justify-between items-center'>
                        <div className='font-ubuntu fs-12 lh-14 c-primary'>
                            <input type="checkbox" className='c-primary'></input>
                            Намайг сана
                        </div>
                        <div className='font-ubuntu fs-12 lh-14 underline'>Нууц үгээ мартсан</div>
                    </div>
                    
                    <Button className="font-ubuntu w-8 fs-20 lh-23 mt-4 bold c-default h-5 ph-4 b-primary" onClick={signIn}>Нэвтрэх</Button>
                    <Link to="/signup">
                        <div className="font-ubuntu fs-12 c-primary underline">Шинэ хэрэглэгч бол энд дарна уу</div>
                    </Link>
                </div>
            </div>
        </Layout>
    )
}