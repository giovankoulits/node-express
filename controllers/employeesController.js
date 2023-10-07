const data = {
  employees: require('../model/employees.json'),
  setEmployees: function (data) {
    this.employees = data;
  },
};

getAllEmployees = (req, res) => {
  res.json(data.employees);
};

createNewEmployee = (req, res) => {
  res.json({
    id: data.employees[data.employees.length - 1] + 1 || 1,
    firstName: req.body.firstname,
    lastName: req.body.lastname,
  });
};

updateEmployee = (req, res) => {
  res.json({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
  });
};

deleteEmployee = (req, res) => {
  res.json({
    firstName: req.body.firstname,
    lastName: req.body.lastname,
  });
};

getEmployee = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
