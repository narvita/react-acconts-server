"use strict";
exports.__esModule = true;
exports.User = void 0;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1["default"].Schema({
    userId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    owner: {
        type: String,
        required: true
    },
    createdOn: {
        type: String,
        required: true
    },
    updatedOn: {
        type: String,
        required: true
    }
});
exports.User = mongoose_1["default"].model("User", UserSchema);
