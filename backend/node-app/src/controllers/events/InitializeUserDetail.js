const { request, gql, GraphQLClient } = require("graphql-request");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const { sendEmail } = require("../sendMessage");
dotenv.config();

const client = new GraphQLClient(process.env.HASURA_URI, {
  headers: {
    "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
  },
});

exports.initialize = async (req, res, next) => {


  const { event, table } = req.body;
  console.log("event", event)

  const HASURA_OPERATION = `mutation ($id: uuid!) {
  insert_profile_details_one(object: {author_id: $id}) {
    id
  }
`
  ;

};