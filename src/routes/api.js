const express = require('express')
const router = express.Router();
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const {
    Createprofiles,
    UserLogin,
    SelectProfile,
    UdateProfile
} = require("../controllers/ProfileController")

router.post("/Createprofiles", Createprofiles)
router.post("/UserLogin", UserLogin)
router.get("/SelectProfile", AuthVerifyMiddleware, SelectProfile)
router.post("/UdateProfile", AuthVerifyMiddleware, UdateProfile)
module.exports = router;