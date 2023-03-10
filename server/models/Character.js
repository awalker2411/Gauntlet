const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `characters` array in User.js
const charSchema = new Schema({
    charName: [
        {
            type: String,
        },
    ],
    description: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = charSchema;