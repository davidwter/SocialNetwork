'use strict';

var _ = require('lodash'),
    errorHandler = require('./errors.server.controller'),
    mongoose = require('mongoose'),
    passport = require('passport'),
    Status = mongoose.model('Status'),
    User = mongoose.model('User'),
    Comment = mongoose.model('Comment');

/**
 * Module dependencies.
 */

exports.getFriends = function(req,res) {
    User
        .find()
        .exec( function(err, doc) {
            if (err) {
                //console.log(err);
                return res.status(400).send({
                    message: errorHandler.getErrorMessage(err)

                });
            }
            else
            {
                //and update the parent
                //console.log(doc.kids);

                res.json(doc);

            }
        });
};







