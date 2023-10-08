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
  const newEmployee = {
    id: data.employees[data.employees.length - 1].id + 1 || 1,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  };
  if (!newEmployee.firstname || !newEmployee.lastname) {
    return res
      .status(400)
      .json({ message: 'First and last name are required' });
  }

  data.setEmployees([...data.employees, newEmployee]);
  console.log(data.employees);

  res.status(201).json(data.employees);
};

updateEmployee = (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.body.id)
  );

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.body.id} not found` });
  }

  if (req.body.firstname) {
    employee.firstname = req.body.firstname;
  }
  if (req.body.lastname) {
    employee.lastname = req.body.lastname;
  }

  const filteredArray = data.employees.filter((emp) => emp.id !== employee.id);
  const unsortedArray = [...filteredArray, employee];

  data.setEmployees(
    unsortedArray.sort((a, b) => (a.id > b.id ? 1 : a.id < b.id ? -1 : 0))
  );

  res.json(data.employees);
};

deleteEmployee = (req, res) => {
  const employee = data.employees.find((emp) => {
    console.log(emp.id, req.body.id);
    return emp.id === parseInt(req.body.id);
  });

  console.log(employee);

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.body.id} not found` });
  }

  const filteredArray = data.employees.filter((emp) => emp.id !== employee.id);
  data.setEmployees([...filteredArray]);
  res.json(data.employees);
};

getEmployee = (req, res) => {
  const employee = data.employees.find(
    (emp) => emp.id === parseInt(req.params.id)
  );

  if (!employee) {
    return res
      .status(400)
      .json({ message: `Employee ID ${req.params.id} not found` });
  }
  res.json(employee);
};

module.exports = {
  getAllEmployees,
  createNewEmployee,
  updateEmployee,
  deleteEmployee,
  getEmployee,
};
