module.exports = function(mongoose){

    // Mongoose Schema definition
    var Schema = mongoose.Schema;
    var EmployeeSchema = new Schema({
        name: String,
        phone: String,
        email: String,
        role: String,
    });

    // Mongoose Model definition
    var Employee = mongoose.model('employees', EmployeeSchema);
    return Employee
}