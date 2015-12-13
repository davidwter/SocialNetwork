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
exports.create = function(req, res) {
    var status = new Status(req.body);
    var UserId = req.params.userId;

    status.Author = UserId;

    // Then save the status
    status.save(function(err) {

        if (err) {
            console.log(err);
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)

            });
        }
        else
        {
            //and update the author
            User.findByIdAndUpdate(
                UserId,
                {$push: {Status: status._id}},
                {safe: true, upsert: true},
                function(err, model) {
                    if (err)
                        console.log(err);
                }
            );

            res.json(status);
        }

    });


};

exports.getStatus = function(req,res) {
    Status
        .find()
        .populate('Author')
        .populate('Comments')
        .populate({ path: 'Comments' })
        .sort({Creation_Date: 'descending'})
        .exec( function(err, doc) {
            var options = {path: 'Comments.Author',model: 'User'};
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
                Status.populate(doc, options, function (err, docs)
                    {
                        res.json(docs);
                    }
                );


            }
        });
};

exports.createComment = function(req,res) {
    var comment = new Comment(req.body);
    comment.Status_id = req.params.statusId;

    comment.Author = req.params.UserId;

    // Then save the status
    comment.save(function(err) {

        if (err) {
            console.log(err);
            return res.status(400).send({
                message: errorHandler.getErrorMessage(err)

            });
        }
        else
        {
            Status.findByIdAndUpdate(
                comment.Status_id,
                {$push: {Comments: comment._id}},
                {safe: true, upsert: true},
                function(err, model) {
                    if (err)
                        console.log(err);
                }
            );
            res.json(comment);
        }

    });
};

exports.getComments = function(req,res) {
   var StatusId = req.params.statusId;
    Comment
        .find()
        .where('Status_id',StatusId)
        .populate('Author')
        .sort({Creation_Date: 'descending'})
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





