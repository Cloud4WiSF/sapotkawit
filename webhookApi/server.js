var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Subscription = require('./api/models/webhookModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Webhookdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/webhookRoutes');
routes(app);


app.listen(port);


console.log('webhooks RESTful API server started on: ' + port);