const taxRate = 0.2;
const nhifRate = 0.07;
const nssfRate = 0.05;
function netSalary(basicSalary, benefits) {
  const grossPay = basicSalary + benefits;
  const taxDeduction = grossPay * taxRate;
  const nhifDeduction = grossPay * nhifRate;
  const nssDeduction = grossPay * nssfRate;
  const totalDeduction = taxDeduction + nhifDeduction + nssDeduction;
  const netPay = grossPay - totalDeduction;
  return `Here is the Breakdown of Your Pay \n Your Basic Salary is N${basicSalary}, and a Bonus of N${benefits}. \n Total deductions is as follow: \n Tax N${taxDeduction}. \n NHIF N${nhifDeduction}\n NSSF N${nssDeduction}\n Total Deduction is N${totalDeduction}\n Your Net Monthly Salary is N${netPay}`;
}
console.log(netSalary(100000, 20000));
