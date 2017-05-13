'use strict';


var mongoose = require('mongoose'),
  Subscription = mongoose.model('Subscriptions');

exports.list_all_subscriptions = function(req, res) {
  Subscription.find({}, function(err, Subscription) {
    if (err)
      res.send(err);
    res.json(Subscription);
  });
};




exports.create_a_subscription = function(req, res) {
  var new_subscription = new Subscription(req.body);
  new_subscription.save(function(err, subscription) {
    if (err)
      res.send(err);
    res.json(subscription);
  });
};


exports.read_a_subscription = function(req, res) {
  Subscription.findById(req.params.subscriptionId, function(err, subscription) {
    if (err)
      res.send(err);
    res.json(subscription);
  });
};


exports.update_a_subscription = function(req, res) {
  Subscription.findOneAndUpdate(req.params.subscriptionId, req.body, {new: true}, function(err, subscription) {
    if (err)
      res.send(err);
    res.json(subscription);
  });
};


exports.delete_a_subscription = function(req, res) {


  Subscription.remove({
    _id: req.params.subscriptionId
  }, function(err, subscription) {
    if (err)
      res.send(err);
    res.json({ message: 'subscription successfully deleted' });
  });
};
