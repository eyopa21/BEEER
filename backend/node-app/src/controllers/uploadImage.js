require('dotenv').config();

const fs = require('fs');

const { request, gql, GraphQLClient } = require("graphql-request");
const admin = require("firebase-admin");
const client = new GraphQLClient(process.env.HASURA_URI, {
    headers: {
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET
    }
});
const filePath = '../image.jpg';













const serviceAccount = require('../../serviceAccount.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'beeer-ethiopia.appspot.com'
});

const bucket = admin.storage().bucket();


const upload = async(req, res) => {
    const { arg1 } = req.body.input;
   const base64String = arg1.base64;
const buffer = Buffer.from(base64String, 'base64');

fs.writeFile(filePath, buffer, async (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
    console.log('File written successfully:', filePath);
    try {
    const uploadedFile = await bucket.upload(filePath, {
      destination: `images/${Date.now()}.png`,
      metadata: {
        contentType: "image/jpeg",
      },
    });
        console.log("Image uploaded successfully", uploadedFile);
        const [url] = await uploadedFile[0].getSignedUrl({ action: 'read', expires: '03-01-2500' });
        console.log('Download URL:', url);
        res.json({
          url: url
        });
  } catch (error) {
    console.error("Error uploading image:", error);
  }
});
  
}


module.exports = { upload }