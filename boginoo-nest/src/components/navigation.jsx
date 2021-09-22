import React, { useContext } from 'react';
import { Button } from './';
import { useHistory } from 'react-router-dom'
import { auth } from '../firebase';
import AuthContext from '../providers/auth-provider';

export const Navigation = () => {
    const { user } = useContext(AuthContext);
    const history = useHistory()

    const toSignInPage = () => {
        history.push('login')
    }

    const signOut = async () => {
        try {
            await auth.signOut();
        } catch (e) {
            window.alert(e.message)
        } 
    }

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary ph-4'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {
                !user.isAnonymous
                ? (
                <div className='font-ubuntu fs-20 lh-23 bold'> { user.email }
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={ signOut }>Гарах</Button>
                </div>
                )
                : (<Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={ toSignInPage }>Нэвтрэх</Button>) 
            }
        </div>
    );
};