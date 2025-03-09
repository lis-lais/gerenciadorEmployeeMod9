const Employee = require('../models/employee');

const createEmployee = async (employeeData) => 
    await Employee.create(employeeData);

const findAllEmployee = async () => 
    await Employee.find();

const findById = async (id) => 
    await Employee.findById(id);

const updateById = async (id, employeeData) => 
    await Employee.findByIdAndUpdate(id, employeeData, { new: true });

const deleteById = async (id) => 
    await Employee.findByIdAndDelete(id);

const searchEmployee = async (filters) => 
    await Employee.find(filters);

module.exports = {
    createEmployee,
    findAllEmployee,
    findById,
    updateById,
    deleteById,
    searchEmployee 
};