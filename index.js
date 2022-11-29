// Write your solution in this file!
const employee ={}
function updateEmployeeWithKeyAndValue(employee, key, value)
{
    const newObj={...employee};
    newObj[key] = value;
    return newObj;

}
employee.name ="sam"
const employees = updateEmployeeWithKeyAndValue(employee, 'streetAddress', '11 Broadway')
console.log(employees)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}
function deleteFromEmployeeByKey(employee, name)
{
    const newEmployee = updateEmployeeWithKeyAndValue(employee,)
    delete newEmployee.name;
    return newEmployee;

}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee;
}
