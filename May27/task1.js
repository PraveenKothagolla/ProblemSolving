/* 1) Write a program to print the below pattern based on number of rows
rows=4
1
2 5
3 6 
4 7 9 10*/
const prompt = require("prompt-sync")();
let rows = prompt("enter no of rows  ");
// value = 1;
// for (i = 1; i <= rows; i++)
//  {
//   s = "";

//   if (i == 1) {
//     s = value;
//     value++;
//   }
//   if (i == 2) {
//     s = s + value +" "+ (Number(value) + 3);
//     value++;
//   }
//   if (i == 3) {
//     s = s + value +" "+(Number(value) + 3) +" "+ (Number(value) + 5);
//     value++;
//   }
//   if (i == 4) {
//     s = s + value +" "+ (Number(value)+3) +" " + (Number(value)  + 5)+" " + (Number(value) +6 );
//   }
//   console.log(s);
// }

value = 0;
for (i = 1; i <= rows; i++) {
  s = "";

  for (j = 1; j <= i; j++) {
    if (j == 1) {
      value++;
      s = s + value + " ";
    } else if (j == 2) {
      s = s + (i + j + 1) + " ";
    } else {
      s = s + (i + j + 2) + " ";
    }
  }
  console.log(s);
}
