const mongoose = require('mongoose');

// the mongoose object has a property called Schema (mongoose.Schema).
// take that property and asign it to new variable called Schema.
// mongoose wants to know ahead of time, the properties being used.
const { Schema } = mongoose;

//Model Instance
const userSchema = new Schema ({
  googleId: String
});

//Model Class - users collection
mongoose.model('users', userSchema);