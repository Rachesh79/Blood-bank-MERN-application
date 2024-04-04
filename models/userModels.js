const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    role:{
      type:String,
      required:[true,'Role is required'],
      enum:['admin','organization','donar','hospital']
    },
    name:{
        type:String,
        required: function (){
            if(this.role === 'donar' || this.role === 'admin'){
                return true
            }
            return false
        }
    },
    organization:{
        type:String,
        required: function(){
            if(this.role == 'organization' || this.role === 'admin'){
                return true
            }
            return false
        }
    },
    hospitalName:{
        type:String,
        required: function(){
            if(this.role === 'hospital'){
                return true
            }
            return false
        }
    },
    email: {
        type:String,
        required:[true,'Email is required'],
        unique:true
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'Address is required']
    },
    phone:{
        type:String,
        required:[true,'Phone is required']
    },
},{timestamps:true})

module.exports = mongoose.model('donar',userSchema)