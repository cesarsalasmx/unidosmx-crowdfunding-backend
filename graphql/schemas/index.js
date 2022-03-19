const { GetComments, AddComment } = require("./comments");
const { GetDonation, AddDonation } = require("./donations");
const { GetPost, AddPost } = require("./posts");
const { GetSessions, AddSession } = require("./sessions");
const {GetUser, AddUser } = require("./users");

module.exports = { 
    GetComments,
    AddComment,
    GetDonation,
    AddDonation,
    GetPost,
    AddPost,
    GetSessions,
    AddSession,
    GetUser,
    AddUser
};