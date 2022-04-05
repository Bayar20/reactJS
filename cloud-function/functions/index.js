const admin = require("firebase-admin");
const functions = require("firebase-functions");
const axios = require("axios");

admin.initializeApp();

const baseUrl = "http://localhost:5001/qr-payment-hop/us-central1";

exports.create_invoice = functions.https.onRequest((request, response) => {
  if (request.method !== "POST") {
    response.send("Please send a post request!");
  }
  const db = admin.firestore();
  db.collection("shop-invoices").add(request.body);

  axios
    .post(`${baseUrl}/qr_generate`, {
      invoiceId: request.body.name,
      price: request.body.price,
    })
    .then(response.send("Invoice created!"))
    .catch((e) => console.log(e));
});

exports.qr_generate = functions.https.onRequest((request, response) => {
  console.log("qr", request.body);
  response.send("qr generator successfully received data");
});
