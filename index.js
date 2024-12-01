// Declare a global variable using var and assign it the value 'bob'.
var customerName = "bob";

// Function to uppercase the global `customerName`.
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare a global variable `bestCustomer` and assign it 'not bob'.
function setBestCustomer() {
    bestCustomer = "not bob"; // Declare globally.
}

// Function to overwrite the `bestCustomer` variable.
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Update the global `bestCustomer`.
}

// Declare a constant in global scope called `leastFavoriteCustomer`.
const leastFavoriteCustomer = "Ruto";

// Function to attempt to change the constant `leastFavoriteCustomer`.
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "change"; // Attempt to reassign (throws an error).
}
