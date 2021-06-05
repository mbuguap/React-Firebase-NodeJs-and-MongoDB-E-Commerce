var admin = require('firebase-admin');

var serviceAccount = require('../config/fbServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ecommerce-5840c.firebaseapp.com',
});

module.exports = admin;
