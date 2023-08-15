//Declare a constant to hold values for the deductions
const taxRate = 0.2;
const nhifRate = 0.07;
const nssfRate = 0.05;
//A function with the basic salary and benefit parameter
function netSalary(basicSalary, benefits) {
  //calculate gross payment
  const grossPay = basicSalary + benefits;
  //Calculate the deductions
  const taxDeduction = grossPay * taxRate;
  const nhifDeduction = grossPay * nhifRate;
  const nssDeduction = grossPay * nssfRate;
  const totalDeduction = taxDeduction + nhifDeduction + nssDeduction;
  //Net payment after the dections
  const netPay = grossPay - totalDeduction;
  //
  return `Here is the Breakdown of Your Pay \n Your Basic Salary is N${basicSalary}, and a Bonus of N${benefits}. \n Total deductions is as follow: \n Tax N${taxDeduction}. \n NHIF N${nhifDeduction}\n NSSF N${nssDeduction}\n Total Deduction is N${totalDeduction}\n Your Net Monthly Salary is N${netPay}`;
}
//call the function with the arguments
console.log(netSalary(100000, 20000));
