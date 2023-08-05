const User = require("../models/user");

module.exports.getUsers = (req, res) => {
  const users = User.find();

  res.send(users);
};
// save users
module.exports.saveUsers = (req, res) => {
  const { name, sector, agreedToTerms } = req.body;

  User.create({ name, sector, agreedToTerms })
    .then((data) => {
      console.log("Saved successfully");
      res.status(201).send(data);
    })
    .catch((error) => {
      console.log(error);
      res.status({
        error: error,
        message: "Something went wrong to save users",
      });
    });
};

// edit user
module.exports.editUsers = (req, res) => {
  const { id } = req.params;
  const { name, sector, agreedToTerms } = req.body;

  let emptyFields = [];

  if (!name) {
    emptyFields.push("name");
  }

  if (!sector) {
    emptyFields.push("sector");
  }

  if (!agreedToTerms) {
    emptyFields.push("agreedToTerms");
  }

  User.findByIdAndUpdate(id, { ...req.body })
    .then(() => {
      console.log("Edited successfully");
      res.send("Edited successfully");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error: error,
        message: "Something went wrong while updating users",
      });
    });
};
