/*2) Write a program to print the below pattern

input: Enter number: 12345

1   5
 2 4
  3
 2 4
1   5
*/
const prompt = require("prompt-sync")();
let rows = prompt("enter number ");

for(i=0;i<=rows.length-1;i++)
    {
        s=""
        for(j=0;j<=rows.length-1;j++)
            {
                if(i==j)
                    {
                        s=s+rows[i]
                    }
                    else if(i+j==rows.length-1){
                        s=s+rows[j]
                    }
                    else{
                        s=s+" "
                    }

                    

            }console.log(s)
    }
