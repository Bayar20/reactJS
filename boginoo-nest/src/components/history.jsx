import React from 'react'
import { Button } from '../components'

export const History = ({ histories }) => {

    const copyToClipboard = (link) => {
        navigator.clipboard.writeText(link)
    }
    
    return (
        <div>
            {  
                histories.map((history) => {
                    let shortString = '';
                    shortString = history.originalUrl.slice(0,60)

                    return (
                        <div key={ history.id } className='font-ubuntu mt-5 justify-center items-center'>
                            <div>
                                <div className='mt-4 fs-14 lh-16 faded'>Өгөгдсөн холбоос:</div>
                                <div className='mt-3 fs-16 lh-18'> { shortString }..... </div>
                            </div>
                            <div className='mb-3 bottom-border pb-4'>
                                <div className='mt-4 fs-14 lh-16 faded'> Богино холбоос: </div>
                                <div className='mt-3 fs-16 lh-18'> 
                                    <a href={ `${window.location.origin}/${history.id}` } target="_blank" rel="noopener noreferrer"> { `${window.location.origin}/${history.id}` } </a> 
                                    <Button className='c-primary b-default ph-5 underline fs-16 lh-18 c-button' 
                                        onClick={ () => copyToClipboard(`${window.location.origin}/${history.id}`) }
                                    >Хуулж авах
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )
                })
              
            }
        </div>
    )
}