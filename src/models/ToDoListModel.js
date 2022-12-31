const mongoose = require('mongoose')
const dataSchema = mongoose.Schema({
    UserName: { type: String },
    TodoSubject: { type: String },
    TodoDescription: { type: String },
    TodoStatus: { type: String },
    TodoCreateDate: { type: Date },
    TodoUpdateDate: { type: Date }

}, { versionKey: false });
const ToDoListModel = mongoose.model('Todolist', dataSchema);

module.exports = ToDoListModel;