const data1 = [17,21,23];
const data2 = [12,15,18];
const printForecast = (arr) => {
  const arrLen = arr.length;
  var str = "";
  for (let i = 0; i < arrLen; i++) {
    const element = arr[i];
    str += "..." +element+"°C in "+" days " +Number.parseInt(i+1);
   
  }return str;
};
document.write("<b>KQ Bài 09 data01: </b>"+printForecast(data1));
document.write("<br>");
document.write("<b>KQ Bài 09 data02: </b>"+printForecast(data2));