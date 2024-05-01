const prompt=require("prompt-sync")();
let num=prompt("enter a number");
prod=1;
s=""
for(i=1;i<=num;i++)
{
   
   
   s=s+i;
   if(i!=num)
   {
    s=s+"*"
   }

  prod=prod*i;

}
console.log(`${s}=${prod}`);