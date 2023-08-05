const { Router } = require("express");
const {
  getUsers,
  saveUsers,
  editUsers,
} = require("../controllers/userControllers");

const router = Router();

router.get("/users", getUsers);
router.post("/save", saveUsers);
router.put("/edit/:id", editUsers);

module.exports = router;
