const profileModel = require("../models/ProfileModel")
const jwt = require('jsonwebtoken');

exports.Createprofiles = async(req, res) => {
    try {
        const task = await profileModel.create(req.body);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.massage });
    }
}
exports.UserLogin = async(req, res) => {
    let UserName = req.body['UserName'];
    let Password = req.body['Password']

    profileModel.find({ UserName: UserName, Password: Password }, (error, data) => {
        if (error) {
            res.status(400).json({ status: "fail", data: error })
        } else if (data.length == 1) {
            // create auth token
            let payload = {
                exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60),
                data: data[0]
            }
            let token = jwt.sign(payload, 'secretkey123');
            res.status(200).json({ status: "success", token: token, data: data[0] })
        } else {
            res.status(401).json({ status: "unauthorized" })
        }
    })
}

exports.SelectProfile = async(req, res) => {
    let UserName = req.headers['username']
    profileModel.find({ UserName: UserName }, (error, data) => {
        if (error) {
            res.status(401).json({ status: "unauthorized" })
        } else {
            res.status(200).json({ status: "success", data: data })
        }
    })
}

exports.UdateProfile = async(req, res) => {
    let UserName = req.headers['username']
    let reqBody = req.body;

    profileModel.updateOne({ UserName: UserName }, { $set: reqBody }, { upsert: true }, (err, data) => {
        if (err) {
            res.status(400).json({ status: "fail", data: err })
        } else {
            res.status(200).json({ status: "success", data: data })
        }
    })


}