//1. Variables and Constants

// In JavaScript, we use var, let, and const to declare variables.

let fname = 'React Learner'; // let allows the value to be changed
const appName = 'React';    // const value cannot be changed

console.log(fname);
console.log(appName);

fname="Jay"; // This is Possible
//appName="New React"; // This is Not possible. It will generate an error! 
//TypeError: Assignment to constant variable.
console.log(fname);
console.log(appName);

// Use let for variables that may change.
// Use const for variables that shouldn’t change.
