const bills = [124, 48, 268, 180, 42, 100, 300, 1000, 500, 100];
const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
const tips = new Array();
const total = new Array();
const billsLen = bills.length;
for (let i = 0; i < billsLen; i++) {
  const element = bills[i];
  tips.push(calcTip(element));
  total.push(element + tips[i]);
}
const calcAverage = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
document.write("<b>KQ Bài 08: </b>"+calcAverage(total));

