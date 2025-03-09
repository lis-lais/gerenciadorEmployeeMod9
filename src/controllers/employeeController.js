const employeeService = require('../service/employeeService');

const createEmployee = async (req, res, next) => {
    try {
        const employee = await employeeService.createEmployee(req.body);
        res.status(201).json(employee);
    } catch (error) {
        next(error);
    }
};

const findAllEmployee = async (req, res, next) => {
    try {
        const employees = await employeeService.findAllEmployee();
        res.ststus(200).json(employees);
    } catch (error) {
        next(error);
    }
};

const findById = async (req, res, next) => {
    try {
        const employee = await employeeService.findById(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

const updateById = async (req, res, next) => {
    try {
        const employee = await employeeService.findByIdAndUpdate(req.params.id, req.body);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(200).json(employee);
    } catch (error) {
        next(error);
    }
};

const deleteById = async (req, res, next) => {
    try {
        const employee = await employeeService.findByIdAndDelete(req.params.id);
        if (!employee) return res.status(404).json({ message: 'Employee not found' });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};

const searchEmployee = async (req, res, next) => {
    try {
        const employees = await employeeService.searchEmployee(req.query);
        res.status(200).json(employees);
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createEmployee,
    findAllEmployee,
    findById,
    updateById,
    deleteById,
    searchEmployee,
};