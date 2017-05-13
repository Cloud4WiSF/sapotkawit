'use strict';
module.exports = function(app) {
  var webhooks = require('../controllers/webhookController');


  // todoList Routes
  app.route('/subscriptions')
    .get(webhooks.list_all_subscriptions)
    .post(webhooks.create_a_subscription);


  app.route('/subscriptions/:subscriptionId')
    .get(webhooks.read_a_subscription)
    .put(webhooks.update_a_subscription)
    .delete(webhooks.delete_a_subscription);
};
