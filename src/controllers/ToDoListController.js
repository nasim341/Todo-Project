const profileModel = require("../models/ProfileModel");
const ToDoListModel = require("../models/ToDoListModel");

exports.CreateToDo = (req, res) => {
    let reqBody = req.body;

    let TodoSubject = req.body['TodoSubject']
    let TodoDescription = req.body['TodoDescription']
    let UserName = req.headers['username']

    let TodoStatus = "Now"
    let TodoCreateDate = Date.now();
    let TodoUpdateDate = Date.now();
    let postBody = {
        UserName: UserName,
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoStatus: TodoStatus,
        TodoCreateDate: TodoCreateDate,
        TodoUpdateDate: TodoUpdateDate
    }
    ToDoListModel.create(postBody, (error, data) => {
        if (error) {
            res.status(400).json({ status: "fail", data: error })
        } else {
            res.status(200).json({ status: "Success", data: data })
        }
    })
}

exports.SelectTodo = (req, res) => {
    let UserName = req.headers['username']
    ToDoListModel.find({ UserName: UserName }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err })
        } else {
            res.status(200).json({ status: "success", data: data })
        }
    })
}

exports.UpdateTodo = (req, res) => {
    let TodoSubject = req.body['TodoSubject']
    let TodoDescription = req.body['TodoDescription']
    let _id = req.body['_id']
    let TodoUpdateDate = Date.now();
    let PostBody = {
        TodoSubject: TodoSubject,
        TodoDescription: TodoDescription,
        TodoUpdateDate: TodoUpdateDate
    }

    ToDoListModel.updateOne({ _id: _id }, { $set: PostBody }, { upsert: true }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err })
        } else {
            res.status(200).json({ status: "success", data: data })
        }
    })
}

exports.UpdateTodoStatus = (req, res) => {

    let TodoStatus = req.body['TodoStatus']
    let _id = req.body['_id']
    let TodoUpdateDate = Date.now();

    let postBody = {
        TodoStatus: TodoStatus,
        TodoUpdateDate: TodoUpdateDate
    }
    ToDoListModel.updateOne({ _id: _id }, { $set: postBody }, { upsert: true }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: data })
        } else {
            res.status(200).json({ status: 'success', data: data })
        }
    })
}

exports.RemoveTodo = (req, res) => {
    let _id = req.body['_id']

    ToDoListModel.remove({ _id: _id }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err })
        } else {
            res.status(200).json({ status: "success", data: data })
        }
    })
}

exports.SelectTodoStatus = (req, res) => {
    let UserName = req.headers['username']
    let TodoStatus = req.body['TodoStatus']
    profileModel.find({ UserName: UserName, TodoStatus: TodoStatus }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err })
        } else {
            res.status(200).json({ status: "success", data: data })
        }
    })
}
exports.SelectTodoByData = (req, res) => {
    let UserName = req.headers['username']
    let FormDate = req.body['FormDate']
    let ToDate = req.body['ToDate']

    profileModel.find({ UserName: UserName, TodoCreateDate: { $gte: new Date(FormDate), $lte: new Date(ToDate) } }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err })
        } else {
            res.status(200).json({ status: "success", data: data })
        }

    })
}