
// // get api 
// app.get("/userget",async(req,res)=>{
//     try{
//       let data = await employeemodel.find({})
//       console.log(data);
//       res.send(data)
//     }
//     catch(err){
//      res.send(err)
//     }
//  })
 
//  // Post API
//  app.post("/userpost", async (req, res) => {
//    try {
//      // Extract data from the request body
//      const { name, age, city, id } = req.body;
 
//      // Create a new employee document using the employeemodel
//      const newEmployee = new employeemodel({
//        name,
//        age,
//        city,
//        id,
 
//      });
 
//      // Save the new employee document to the database
//      await newEmployee.save();
 
//      res.send("Employee saved successfully!");
//    } catch (error) {
//      res.send(error);
//    }
//  });
 
 
//  // PUT API
//  app.put("/userput/:id", async (req, res) => {
//      try {
//        const employeeId = req.params.id;
//        const { name, age, city } = req.body;
   
//        // Find the employee by id
//        const employee = await employeemodel.findById(employeeId);
   
//        if (!employee) {
//          return res.status(404).send("Employee not found");
//        }
   
//        // Update the employee's data
//        employee.name = name;
//        employee.age = age;
//        employee.city = city;
   
//        // Save the updated employee data to the database
//        await employee.save();
   
//        res.send("Employee updated successfully!");
//      } catch (error) {
//        res.status(500).send(error.message);
//      }
//    });
 
//    // DELETE API
//  app.delete("/userdelete/:id", async (req, res) => {
//    try {
//      const employeeId = req.params.id;
 
//      // Find the employee by id
//      const employee = await employeemodel.findById(employeeId);
 
//      if (!employee) {
//        return res.status(404).send("Employee not found");
//      }
 
//      // Delete the employee from the database
//      // await employee.remove();
//      await employeemodel.deleteOne({ _id: employeeId });
 
//      res.send("Employee deleted successfully!");
//    } catch (error) {
//      res.status(500).send(error.message);
//    }
//  });
 