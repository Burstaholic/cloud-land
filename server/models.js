//----------------------------------------------------------------------------------------------------------------------
// Models for Cloud Land
//
// @module models.js
//----------------------------------------------------------------------------------------------------------------------

var path = require('path');
var jbase = require('jbase');

//----------------------------------------------------------------------------------------------------------------------

var db = {errors: jbase.errors};
var rootPath = path.join(__dirname, 'db');

//----------------------------------------------------------------------------------------------------------------------
// Site models
//----------------------------------------------------------------------------------------------------------------------

db.User = jbase.defineModel('users', {
    // TODO: use email as primary key, new jbase feature
    gPlusID: String,
    nickname: String,
    tagline: String,
    email: String,
    displayName: String,
    avatar: String,
    // TODO: use actual dates now that jbase supports them
    created: {type: Number, default: Date.now()}
}, {rootPath: rootPath}); // end User

db.Article = jbase.defineModel('articles', {
    authorID: String,
    title: String,
    slug: String,
    body: String,
    draft: { type: Boolean, default: true },
    created: Date
});

//----------------------------------------------------------------------------------------------------------------------

module.exports = db;

//----------------------------------------------------------------------------------------------------------------------