'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SubscriptionSchema = new Schema({
  event_type: {
    type: String,
    Required: 'Type of the event'
  },
  subscribed_date: {
    type: Date,
    default: Date.now
  },
  callback_url: {
    type: String
  }
});

module.exports = mongoose.model('Subscriptions', SubscriptionSchema);