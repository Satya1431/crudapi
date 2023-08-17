// now creating schema in mongodb
const mongoose=require('mongoose');
const {Schema}=mongoose;
const employeeschema = new Schema({
    newUuid:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
    },
    city:{
        type:String,
        required:true,
    },
    id:{
        type:String,
        required:true
    }
})

module.exports.employeemodel=mongoose.model("employee",employeeschema)
// export default employeemodel;