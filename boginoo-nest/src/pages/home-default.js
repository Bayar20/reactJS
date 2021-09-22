import React, { useState, useContext, useEffect } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket, checkIsValidUrl, History } from '../components/';
import { firestore }  from '../firebase'
import AuthContext from '../providers/auth-provider';
import { Link } from 'react-router-dom'

export const HomeDefault = () => {
    const [url, setUrl] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const { user } = useContext(AuthContext);

    const shortenUrl = async () => {
        setIsLoading(true)
        
        const urlDoc = await firestore.collection('urls').add({
            originalUrl: url, 
            createdAt: new Date(),
            uid: user.uid
        }).catch((error) => {
            console.log(error)
        });

        setHistories([{
            id: urlDoc.id,
            originalUrl: url
        }, ...histories])
      
        setUrl('')
        setIsLoading(false)
    }

    const [ histories, setHistories ] = useState([]);
    useEffect(() => {
        firestore.collection(`users/${ user.uid }/history`).orderBy('createdAt', 'desc').onSnapshot((snapshot) => {
            const _histories = [];
            snapshot.forEach((doc) => {
                _histories.push({
                    id: doc.id,
                    ...doc.data(),
                })
            })

            setHistories(_histories);
        })
    }, [ user ]);

    const isValidUrl = (url) => {
        return checkIsValidUrl(url)
    }

    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='justify-center flex'>
                    <Link to="/" className="font-lobster fs-56 lh-70 c-primary no-underline">Boginoo</Link>
                </div>
                <div className='mt-5 flex justify-center items-center'>
                    <Input className="h-5 w-9 b-gray0 input ph-4" placeholder='http://www.web-huudas.mn' value={ url } onChange={ setUrl } />
                    <Button className="font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary" onClick={ shortenUrl } disabled={ isLoading || !isValidUrl(url) } >Богиносгох</Button>
                </div>
            
                <History histories={ histories } />   
            </div>
        </Layout>
    )
}