const loginRoutes = require('../../routes/userLogin')
const signupRoutes = require('../../routes/userSignup')


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('I am alive!!!');
})

app.use("/api/user", loginRoutes)
app.use("/api/user", signupRoutes);

module.exports.handler = (event, context, callback) => {
    app(event, context, callback);
  };