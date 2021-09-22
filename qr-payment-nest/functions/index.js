const qrcode = require('qrcode')
const cors = require('cors')({origin: true})
const axios = require('axios')
const functions = require('firebase-functions');

const admin = require('firebase-admin')
admin.initializeApp();

const baseUrl = 'https://us-central1-qr-payment-nest.cloudfunctions.net'

exports.shop_create_invoice = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const db = admin.firestore();
        const invoice = await db.collection('shop-invoices').add(request.body);

        const res = await axios.post(`${ baseUrl }/bank_qr_generate`, {
            invoiceId: invoice.id,
            price: request.body.price,
            shopUrl: `${ baseUrl }/shop_pay_invoice?invoiceId=${ invoice.id }`
        })

        const { qr, invoiceId, price } = res.data

        response.send({ qr, invoiceId, price })
    })
});

exports.bank_qr_generate = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const db = admin.firestore();
        const { invoiceId, price, shopUrl } = request.body;
        await db.doc(`bank-invoices/${ invoiceId}`).set({ price, shopUrl });

        qrcode.toDataURL(`${ baseUrl }/bank_pay_invoice?invoiceId=${ invoiceId }`, (err, code) => {
            if(err) return console.log('error occurred')
     
            response.send({ qr: code, invoiceId, price })
        })
    })
});

exports.bank_pay_invoice = functions.https.onRequest((request, response) => {
    cors(request, response, async () => {
        const db = admin.firestore();
        const { invoiceId } = request.query
    
        await db.doc(`bank-invoices/${ invoiceId }`).set({
            status: 'paid',
        }, {
            merge: true
        })

        const bank_invoice = await db.doc(`bank-invoices/${ invoiceId }`).get()
    
        await axios.post(bank_invoice.data().shopUrl, {})
        response.json({result: `Invoice with ID ${ invoiceId } was successfully paid.`});
    })
});

exports.shop_pay_invoice = functions.https.onRequest(async (request, response) => {
    const db = admin.firestore();
    const { invoiceId } = request.query;

    await db.doc(`shop-invoices/${ invoiceId }`).set({
        status: 'paid',
    }, {
        merge: true
    })

    response.send({status: 'success'});
})

