// Dữ liệu 1
let massMark = 78; // kg
let heightMark = 1.69; // m
let massJohn = 92; // kg
let heightJohn = 1.95; // m

// Công thức tính BMI
const calcBMI = (mass, height) => mass / (height * height);

let BMIMark = calcBMI(massMark, heightMark);
let BMIJohn = calcBMI(massJohn, heightJohn);

document.write("--------------------------------Kết quả bài số 01 --------------------------------");
document.write("<br>");

// So sánh BMI của Mark và John
let markHigherBMI = BMIMark > BMIJohn;
document.write(`BMI của Mark là ${BMIMark}, BMI của John là ${BMIJohn}`);
document.write("<br>");
cdocument.write(markHigherBMI ? "Mark có BMI cao hơn John" : "John có BMI cao hơn Mark");

// Dữ liệu 2
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = calcBMI(massMark, heightMark);
BMIJohn = calcBMI(massJohn, heightJohn);

markHigherBMI = BMIMark > BMIJohn;
document.write("<br>");
document.write(`BMI của Mark là ${BMIMark}, BMI của John là ${BMIJohn}`);
document.write("<br>");
document.write(markHigherBMI ? "Mark có BMI cao hơn John" : "John có BMI cao hơn Mark");