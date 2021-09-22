import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { firestore }  from '../firebase'

export const UrlLanding = () => {
    const { firestoreId } = useParams()
    const [ message, setMessage ] = useState('Redirecting...')
    
    useEffect(() => {
        const originalUrl = async () => {
            try {
                const doc = await firestore.doc(`urls/${firestoreId}`).get()
                window.location.href = `${doc.data().originalUrl}`;
            } catch (error) {
                setMessage('Энэ линк дээр URL хадгалаагүй эсвэл буруу URL оруулсан байна. Та нүүр хуудас руу буцна уу.')
            }
        }
        originalUrl();
   }, [firestoreId])

    return (
        <div className='font-ubuntu fs-16'>
            <p> { message } </p> 
            <a href={ window.location.origin }> Нүүр хуудас руу буцах </a>
        </div>
    )
}