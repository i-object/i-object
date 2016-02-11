var controller = require('./controller.js')

module.exports = function(app) {
  app.post('/buttonPress', controller.sendButtonData);
  app.post('/stats', controller.retrieveStats)
};