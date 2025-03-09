const employeeRepository = require('../repositories/employeeRepository');

const createEmployee = async (data) => {
    if (!data.name || !data.position || !data.department || !data.salary) {
        throw new Error('All fields are required');
    }
};

const findAllEmployee = async () => {
    return await employeeRepository.findAllEmployee();
};

const findById = async (id) => {
    if (!id) {
        throw new Error('ID is required');
    }
    return await employeeRepository.findById(id);
};

const updateById = async (id, data) => {
    if (!id) {
        throw new Error('ID is required');
    }
    await createEmployee(data);
    return await employeeRepository.updateById(id, data);
};

const deleteById = async (id) => {
    if (!id) {
        throw new Error('ID is required');
    }
    return await employeeRepository.deleteById(id);
};

const searchEmployee = async (filters) => {
    if (!filters) {
        throw new Error('Filters are required');
    }
    return await employeeRepository.searchEmployee(filters);
};

module.exports = {
    createEmployee,
    findAllEmployee,
    findById,
    updateById,
    deleteById,
    searchEmployee
};