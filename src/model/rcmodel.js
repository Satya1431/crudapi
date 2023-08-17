// now creating schema in mongodb
const mongoose=require('mongoose');
const {Schema}=mongoose;
const rcFormSchema = new Schema({
    newUuid:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    email: {
        type: String,    // Specify the appropriate data type for email
        required: true,
    },
    password: {
        type: String,    // Specify the appropriate data type for password
        required: true,
    },
})

module.exports.rcFormModel=mongoose.model("Resistration",rcFormSchema)
// export default rcFormModel;