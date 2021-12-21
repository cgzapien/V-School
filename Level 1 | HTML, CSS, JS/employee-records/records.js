// Instantiate three employees X
// Override the status attribute of one of them to either "Part Time" or "Contract" X
// Call the printEmployeeForm method for each employee X
// Put the generated employees into the employees array using whichever method you prefer.

function Employee (name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = "Full-time"; 
}

const employeeOne = new Employee("Carlos Zapien", "Web Developer", "60K")
const employeeTwo = new Employee("Jane Doe", "HR Manager", "55K")
const employeeThree = new Employee("Joe Dirt", "Groundskeeper", "40K")

employeeOne.status = "Contract"

Employee.prototype.printEmployeeForm = printEmployeeForm

function printEmployeeForm() {
    return console.log("Name: " + this.name + ", \nJob Title: " + this.jobTitle + ", \nSalary: " + this.salary + ", \nStatus: " + this.status)
};

employeeOne.printEmployeeForm()
employeeTwo.printEmployeeForm()
employeeThree.printEmployeeForm()

const employees = []
const newEmployees = [employeeOne, employeeTwo, employeeThree]
for (let i = 0; i < newEmployees.length; i++) {
    employees.push(newEmployees[i])
}
console.log(employees)