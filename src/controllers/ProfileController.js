const profileModel = require("../models/ProfileModel")
exports.Createprofiles = async(req, res) => {
    try {
        const task = await profileModel.create(req.body);
        res.status(200).json(task)
    } catch (error) {
        res.status(500).json({ msg: error.massage });
    }
}
exports.UserLogin = async(req, res) => {
    let UserName = req.body['UserName']
    let Password = req.body['Password']

    profileModel.find({ UserName, Password }, (err, data) => {
        res.status(200).json(data)
    })


}