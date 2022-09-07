var employeeModel = require('../model/employeeModel');

module.exports = {
    getemployee: function (req, res) {

        employeeModel.getemployee(function (err, employeeRes) {
            if (!err) {
                res.send({ status: true, data: employeeRes });
            }
            else {
                res.send({ status: false, message: 'No employee found' });
            }
        });
    },
    getemployeebyId: function (req, res) {

        employeeModel.getemployeebyId(req.params.id, function (err, employeeRes) {
            if (!err) {
                res.send({ status: true, data: employeeRes });
            }
            else {
                res.send({ status: false, message: err.message || 'No employee found' });
            }
        });
    },
    deleteById: function (req, res) {

        employeeModel.deleteById(req.params.id, function (err, employeeRes) {
            if (!err) {
                res.send({ status: true });
            }
            else {
                res.send({ status: false, message: err.message || 'No employee found' });
            }
        });
    },
    updateById: function (req, res) {

        employeeModel.updateById(req.params.id,req.body, function (err, employeeRes) {
            if (!err) {
                res.send({ status: true });
            }
            else {
                res.send({ status: false, message: err.message || 'No employee found' });
            }
        });
    }
}