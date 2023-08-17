const rcFormModel = require("../model/rcmodel").rcFormModel;
const uuid = require('uuid');

// post api for rcForm
module.exports.rcpost = async (req, res) => {

    try {
        // Generate a new UUID
        const newUuid = uuid.v4();

        // Extract data from the request body
        const { name, email, password, } = req.body;
        // Create a new rcform document using the rcFormModel
        const newrcform = new rcFormModel({
            newUuid,
            name,
            email,
            password,

        });
        // Save the newrcform document to the database
        await newrcform.save();
        res.status(201).json({
            message: 'Added succesfull'
        });
    } catch (err) {
        res.status(500).json({ message: 'An error occurred', error: err.message });
    }
}

// get api 
module.exports.rcget = async (req, res) => {
    try {
      let data = await rcFormModel.find({})
      console.log(data);
  
      if(data.length === 0){
        res.status(404).json({message : 'No student found'})
      }else{
        res.status(200).json({message : 'Student found', data})
      }
    }
    catch (err) {
      res.status(500).json({ message: 'An error occurred', error: err.message });
    }
  }