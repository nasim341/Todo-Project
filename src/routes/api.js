const express = require('express')
const router = express.Router();
const { Createprofiles, UserLogin } = require("../controllers/ProfileController")

router.post("/Createprofiles", Createprofiles)
router.post("/UserLogin", UserLogin)
module.exports = router;