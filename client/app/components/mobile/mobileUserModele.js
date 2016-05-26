import mongoose from 'mongoose';
var Schema = mongoose.Schema;
var mobileUserSchema = new Schema({
  password: {
    type: String,
    required: true
   
  },
  birthDate: {
    type: String,
    required: true
  }
});
var mobileUserModel = mongoose.model('user', mobileUserSchema);
export {mobileUserModel}