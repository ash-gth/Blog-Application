

import mongoose from 'mongoose'

const UserSchema = mongoose.Schema({
   name: {
    type: String,
    require: true
   },
   username: {
    type: String ,
    require: true,
    unique: true
   },
   password: {
    type: String ,
    require: true
   }
})

const User = mongoose.model('user', UserSchema);
 export default User
