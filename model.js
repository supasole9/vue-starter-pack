const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb://mongodb.cs.dixie.edu/rossSalanoa");

const typeSchema = new Schema ({
  stuff: {
    type: String,
    required: ['true', "Error stuffs"]
  }
});

let type = mongoose.model("Type", typeSchema);

module.exports = {
  type: type
}
