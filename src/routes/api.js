const express = require('express')
const router = express.Router();
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const {
    Createprofiles,
    UserLogin,
    SelectProfile
} = require("../controllers/ProfileController")

router.post("/Createprofiles", Createprofiles)
router.post("/UserLogin", UserLogin)
router.get("/SelectProfile", AuthVerifyMiddleware, SelectProfile)
module.exports = router;