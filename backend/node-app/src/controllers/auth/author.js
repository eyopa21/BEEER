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

exports.login = async (req, res, next) => {
  console.log("login")
  const HASURA_OPERATION = `
query myQuery($email: String!){
authors(where: {email: {_eq: $email}}) {

id
email
password
is_verified
is_deleted
is_suspended
}
}`;
  const { email, password } = req.body.input;
  try {
    const data = await client.request(HASURA_OPERATION, { email });
   
    if (data.authors[0]) {
      if (data.authors[0]?.is_deleted || data.authors[0]?.is_suspended ) {
        return res.status(400).json({ message: "Account is not active right now" });
      } else {
        const match = await bcrypt.compare(password, data.authors[0].password);
        if (match) {
          const tokenContents = {
            sub: "user",
            email: data.authors[0].email,
            uid: data.authors[0].id,
            "https://hasura.io/jwt/claims": {
              "x-hasura-allowed-roles": ['author', "anonymous"],
              "x-hasura-default-role": 'author',
              "x-hasura-user-id": data.authors[0].id.toString(),

            },
          };
          jwt.sign(tokenContents, process.env.JWT_SECRET, (err, token) => {
            if (err) {
              res.sendStatus(403);
            } else {
              return res.json({
                ...data.authors[0],
                token: token,
              });
            }
          });
        } else {
          return res.status(400).json({ message: "Password doesnt match" });
        }
      }
    } else {
      return res.status(400).json({ message: "User not found" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.signUp = async (req, res, next) => {

  const HASURA_OPERATION = `mutation ($email: String!, $password: String!, $beeer_name: String!, $code: String!) {
  insert_authors_one(object: {email: $email, password: $password, beeer_name: $beeer_name, code: $code}) {
    id
 email
 password
  }
}
`
    ;

  const { email, password, beeer_name } =
    req.body.input;
  const hashedPassword = await bcrypt.hash(password, 10);
  let code = Math.floor(1000 + Math.random() * 900000).toString();
  try {
    sendEmail(email, code.toString(), "Here is your Verification code")
      .then(async () => {
        const data = await client.request(HASURA_OPERATION, {
          email,
          password: hashedPassword,
          beeer_name,
          code
        });

        if (data.insert_authors_one) {
          console.log("res", email);
          const tokenContents = {
            sub: "user",
            email: data.insert_authors_one.email,
            uid: data.insert_authors_one.id,
            "https://hasura.io/jwt/claims": {
              "x-hasura-allowed-roles": ["author", "anonymous"],
              "x-hasura-default-role": "author",
              "x-hasura-user-id": data.insert_authors_one.id.toString(),
            },
          };
          jwt.sign(tokenContents, process.env.JWT_SECRET, (err, token) => {
            if (err) {
              res.sendStatus(403);
            } else {
              return res.json({
                ...data.insert_authors_one,
                token: token,
              });
            }
          });

        } else {
          return res.status(400).json({ message: "signup failed" });
        }
      })
      .catch((err) => {
        return res.status(400).json({ message: "Please check your connection, and try again" });
      });
  } catch (err) {

    console.log(err);
    if (
      err.response.errors[0].message ===
      'Uniqueness violation. duplicate key value violates unique constraint "authors_email_key"'
    ) {
      return res
        .status(400)
        .json({ message: "There is a user with this email" });
    } else if (
      err.response.errors[0].message ===
      'Uniqueness violation. duplicate key value violates unique constraint "authors_beeer_name_key"'
    ) {
      return res
        .status(400)
        .json({ message: "There is a user with this beeer name" });
    } else {
      return res.status(400).json({ message: err.message });
    }
  }
};

exports.verify = async (req, res, next) => {

  const GET_DATA = `
  query getData($id: uuid!, $code: String!) {
  authors(where: {_and: [{id: {_eq: $id}, code: {_eq: $code}}]}) {
    id
    email
  }
}

  `

  const HASURA_OPERATION = `
mutation ($id: uuid!, $code: String!) {
  update_authors(where: {id: {_eq: $id}, _and: {code: {_eq: $code}}}, _set: {is_verified: true}) {
    returning {
      id
      email
      is_verified
    }
  }
  insert_profile_details_one(object: {author_id: $id}) {
    id
  }
}

`;
  const { id, code } = req.body.input;
  try {
     const data = await client.request(GET_DATA, {
       id,
       code
     });
    
    if (data.authors[0]) {
    
    sendEmail(
      data.authors[0].email,
      "Thank you",
      "You are successfully verified"
    )
      .then(async (email) => {
        const data = await client.request(HASURA_OPERATION, {
          id,
          code,
        });

        if (data.update_authors.returning[0]) {

          res.json({
            ...data.update_authors.returning[0],
          });

        } else {
          return res
            .status(400)
            .json({ message: "Cannot verify please try again" });
        }
      })
      .catch((err) => {
        console.log("err", err)
        return res.status(400).json({ message: "Please check your connection, and try again" });
      });
    } else {
       return res.status(400).json({ message: "Incorrect code" });
      }
  } catch (err) {
    console.log("ejhf", err)
    return res.status(400).json({ message: err.message });
  }
};

exports.forgotPassword = async (req, res, next) => {
  console.log("forgot password");
  const HASURA_OPERATION = `mutation ($email: String!, $password: String!) {
  update_users(where: {email: {_eq: $email}}, _set: {password: $password}) {
    returning {
      id
    }
  }
}
`;
  const { email } = req.body.input;
  let generatedPassword = Math.floor(1000 + Math.random() * 900000000);
  const hashedPassword = await bcrypt.hash(generatedPassword.toString(), 10);
  console.log(generatedPassword);
  try {
    const data = await client.request(HASURA_OPERATION, {
      email,
      password: hashedPassword,
    });
    console.log(data);
    if (data.update_users.returning[0]) {
      sendEmail(
        email,
        generatedPassword.toString(),
        "Here is your New password"
      )
        .then((email) => {
          console.log("res", email);
          res.json({
            ...data.update_users.returning[0],
          });
        })
        .catch((err) => {
          return res.status(400).json({ message: "Email sending falied" });
        });
    } else {
      return res.status(400).json({ message: "There is no such user" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};

exports.changePassword = async (req, res, next) => {
  console.log("chnage password")
  const HASURA_OPERATION = `
mutation($id: uuid!, $new_password: String!) {
  update_authors_by_pk(pk_columns: {id: $id}, _set: {password: $new_password}) {
    id
  }
}
`;
  const GET_USER_HASURA_OPERATION = `
query myQuery($id: uuid!){
authors_by_pk(id: $id) {
id
email
password
}
}`;
  const { id, new_password , old_password} = req.body.input;
  const hashedPassword = await bcrypt.hash(new_password.toString(), 10);
  try {
    const userData = await client.request(GET_USER_HASURA_OPERATION, { id });
    console.log(userData)
    if (userData.authors_by_pk) {
      const match = await bcrypt.compare(old_password, userData.authors_by_pk.password);
      if (match) {
        const data = await client.request(HASURA_OPERATION, {
        id,
        new_password: hashedPassword,
      });
      if (data.update_authors_by_pk) {

        res.json({
          ...data.update_authors_by_pk,
        });
      } else {
        return res.status(400).json({ message: "Password Updating failed" });
      }
      } else {
        return res.status(400).json({ message: "Wrong password detected" });
       }
      

    } else {
      return res.status(400).json({ message: "There is no such user" });
    }
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
};
