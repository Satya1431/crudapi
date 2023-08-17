// const employeemodel = require("../model/usermodel");
const employeemodel = require("../model/usermodel").employeemodel;
const uuid = require('uuid');


// get api 
module.exports.userget = async (req, res) => {
  try {
    let data = await employeemodel.find({})
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
// Get user by ID API
module.exports.usergetById = async (req, res) => {
  const userId = req.params.id;

  try {
    // Use Mongoose's findById() to retrieve the user by ID
    const foundUser = await employeemodel.findById(userId);

    if (!foundUser) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(foundUser);
  } catch (err) {
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
};


// Post API
module.exports.userpost = async (req, res) => {
  try {
    // Generate a new UUID
    const newUuid = uuid.v4();

    // Extract data from the request body
    const { name, age, city, id } = req.body;

    // Create a new employee document using the employeemodel
    const newEmployee = new employeemodel({
      newUuid,
      name,
      age,
      city,
      id,

    });

    // Save the new employee document to the database
    await newEmployee.save();

    res.send("Employee saved successfully!");
  }catch (err) {
    res.status(500).json({ message: 'An error occurred', error: err.message });
  }
};


// PUT API
module.exports.userput = async (req, res) => {
  try {
    const employeeId = req.params.id;
    const { name, age, city } = req.body;

    // Find the employee by id
    const employee = await employeemodel.findById(employeeId);

    if (!employee) {
      return res.status(404).send("Employee not found");
    }

    // Update the employee's data
    employee.name = name;
    employee.age = age;
    employee.city = city;

    // Save the updated employee data to the database
    await employee.save();

    res.send("Employee updated successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// DELETE API
module.exports.userdelete = async (req, res) => {
  try {
    const employeeId = req.params.id;

    // Find the employee by id
    const employee = await employeemodel.findById(employeeId);

    if (!employee) {
      return res.status(404).send("Employee not found");
    }

    // Delete the employee from the database
    // await employee.remove();
    await employeemodel.deleteOne({ _id: employeeId });

    res.send("Employee deleted successfully!");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
