import logo from './logo.svg';
import './App.css';
import { useState } from 'react'
import axios from 'axios'
import { firestore } from './firebase'
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';

import Loader from './components/loader'

const baseUrl = 'https://us-central1-qr-payment-nest.cloudfunctions.net'
// const baseUrl = 'http://localhost:5001/qr-payment-nest/us-central1'
function App() {
    const [qrImage, setQrImage] = useState();
    const [isPaid, setIsPaid] = useState(false);
    const [price, setPrice] = useState('');
    const [invoiceId, setInvoiceId] = useState('');
    const [isLoading, setIsLoading] = useState(false)
    const [order, setOrder] = useState({})

    const onFormSubmit = async (event) => {
        event.preventDefault();
        setIsLoading(true)
        const response = await axios.post(`${ baseUrl }/shop_create_invoice`, order) 

        const { qr, invoiceId, price } = response.data;
        setIsLoading(false)
        setQrImage(qr);
        setPrice(price);
        setInvoiceId(invoiceId)

        firestore.doc(`shop-invoices/${ invoiceId }`).onSnapshot((doc) => {
            if(doc.data().status === 'paid'){
                setIsPaid(true)
            }
        })
    }

    const handleChange = (fieldName) => {
        return (event) => {
            setOrder({
                ...order,
                [fieldName]: event.target.value
            })
        }
    }

    return (
        <div className="App">
            <header className="container App-header">
                <div className="row center">
                    <div className="col s12 center">
                        {
                        isPaid ? (
                            <>
                            <h2>Order successfully paid!</h2>
                            </>
                        ) : (
                            <div className="row center">
                                    <img src={qrImage ? qrImage : logo} className="App-logo" alt="logo" />
                                    <div className="row center">
                                        {
                                            isLoading ? <Loader></Loader> : (<></>)
                                        }
                                    </div>
                            </div>
                        )
                        }
                        {
                            qrImage ? (
                                <div>
                                    <p>Order ID: { invoiceId }</p>
                                    <p>Total sum: { price } </p>
                                    <p>Order details: </p>
                                    <p>Name: { order.name } &nbsp;
                                    Price: { order.price } &nbsp;
                                    Description: { order.description } </p>
                                </div>
                            ) : 
                            (
                                <div className="row white-text">
                                    <form className="s6 col offset-s3" onSubmit={onFormSubmit}>
                                        <input type="text" className="row teal-text" placeholder="Item name" onChange={handleChange('name')}/>
                                        <input type="number" className="row teal-text" placeholder="Price" onChange={handleChange('price')}/>
                                        <input type="text" className="row teal-text" placeholder="Please enter some details" onChange={handleChange('description')}/>
                                        <button type="submit" className="waves-effect waves-light btn">Pay with QR Pay</button>
                                    </form>
                                </div>

                            )
                        }

                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
