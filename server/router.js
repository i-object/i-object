var controller = require('./controller.js')

module.exports = function(app) {
  app.post('/button', controller.sendButtonData);
  app.post('/stats', controller.retrieveStats)
};