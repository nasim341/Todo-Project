const express = require('express')
const router = express.Router();
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware");
const {
    Createprofiles,
    UserLogin,
    SelectProfile,
    UdateProfile
} = require("../controllers/ProfileController")
const {
    CreateToDo,
    SelectTodo,
    UpdateTodo,
    UpdateTodoStatus,
    RemoveTodo,
    SelectTodoStatus,
    SelectTodoByData
} = require("../controllers/ToDoListController")

router.post("/Createprofiles", Createprofiles)
router.post("/UserLogin", UserLogin)


router.get("/SelectProfile", AuthVerifyMiddleware, SelectProfile)
router.post("/UdateProfile", AuthVerifyMiddleware, UdateProfile)

router.post("/CreateToDo", AuthVerifyMiddleware, CreateToDo)
router.get("/SelectTodo", AuthVerifyMiddleware, SelectTodo)
router.post("/UpdateTodo", AuthVerifyMiddleware, UpdateTodo)
router.post("/UpdateTodoStatus", AuthVerifyMiddleware, UpdateTodoStatus)
router.post("/RemoveTodo", AuthVerifyMiddleware, RemoveTodo)
router.post("/SelectTodoStatus", AuthVerifyMiddleware, SelectTodoStatus)
router.post("/SelectTodoByData", AuthVerifyMiddleware, SelectTodoByData)



module.exports = router;