const mongoose = require("mongoose");

var linkSchema = new mongoose.Schema({
    namespace: {
      type: String,
      required: true,
      unique: true
    },
    linkedTo: {
        type: String,
        required: true,
        unique: false
    }
});

var Link = mongoose.model("link", linkSchema);
module.exports = {
    Link,
    linkSchema
};