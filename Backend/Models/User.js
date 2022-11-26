
import Realm from "realm";
const TaskSchema = {
  name: "UserSchema",
  properties: {
    _id: "int",
    name: "string",
    gender: "string",
    email: "string",
    password: "string",
    phoneNumber: "string",
  },
  primaryKey: "_id",
};

// const UserSchema = {
//   name: {
//     type: String,
//     required: [true, 'Please add your name'],
//   },
//   gender: {
//     type: String,
//     enum : ['F','M','T','P'],
//     default: 'P'
//   },
//   dob: {
//     type: Date,
//     required:[true,'Please add your dob'],
    
//   },
//   email: {
//     type: String,
//     required: [true, 'Please add your email'],
//     unique: true,
//   },
//   password: {
//     type: String,
//     required: [true, 'Please add a password'],
//   },
//   phoneNumber: {
//     type: String,
//     required: [true, 'Please add your phone number'],
//   }
//   },
//   {
//     timestamps: true,
//   }
//)

export default TaskSchema;