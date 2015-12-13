'use strict';

module.exports = function(app) {
	// Root routing
	var core = require('../../app/controllers/core.server.controller');
	var status = require('../../app/controllers/status.server.controller');
	var friends = require('../../app/controllers/friends.server.controller');

	app.route('/').get(core.index);

	app.route('/status/create/:userId').post(status.create);
    app.route('/status/').get(status.getStatus);
	app.route('/comment/create/:statusId/:UserId').post(status.createComment);
	app.route('/comment/:statusId').get(status.getComments);

	app.route('/friends/').get(friends.getFriends);
    //app.route('/status').get(status.getListOfStatus);
};
