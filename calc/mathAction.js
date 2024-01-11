const mathCalculator = require("./mathFunction");

const plus=mathCalculator().add(2,3)
const subtract=mathCalculator().sub(5,3)
const multiply=mathCalculator().mul(9,3)
const divided=mathCalculator().div(8,3)

console.log("Addition : ",plus,"\nsubtraction : ",subtract,"\nmultiplication : ",multiply,"\ndivision : ",divided)
