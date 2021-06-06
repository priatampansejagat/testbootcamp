var express = require('express');
var cors = require('cors')
var app = express();
var bodyParser = require('body-parser');
var mysql = require('mysql');

const {OAuth2Client} = require('google-auth-library');

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Konek123**',
  database: 'simpleweb_db'
});



app.post('/login', function (req, res) {

  var client_id;
  var client_secret;
  var jsonCode = req.body;
  var code = Object.keys(jsonCode)[0];

  connection.connect();

  connection.query('SELECT * FROM credential', function (error, result, fields) {
    if (error) throw error;
    client_id = result[0]['client_id'];
    client_secret = result[0]['client_secret'];
    signIn(client_id,client_secret,code);
  });

  connection.end();


  // console.log();
  // var auth_code = req.body;
  // res.send('Hello World');
})

async function signIn(client_id,client_secret,code){

  return new Promise(async (resolve, reject) => {

    try {
      const oAuth2Client = new OAuth2Client(
          client_id,
          client_secret,
          'http://localhost:8080'
      );

      const authorizeUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: 'https://www.googleapis.com/auth/userinfo.profile',
      });

      const getToken = await oAuth2Client.getToken(code);
      oAuth2Client.setCredentials(getToken.tokens);
      resolve(oAuth2Client);
      console.log(oAuth2Client);


      const url = `https://dns.googleapis.com/dns/v1/projects/${projectId}`;
      const res = await client.request({ url });


      // if (true) {
      //   res.send('true');
      // }
    } catch (e) {
      reject(e);
    }

  });

}


var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

})
