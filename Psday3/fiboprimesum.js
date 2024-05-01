const prompt=require("prompt-sync")();
let num=+prompt("enter a number");
n=0,n2=1;
i=1;
prime=0;
var arr=[];
while(i<=num)
{
    console.log(n)
    if(n>1)
    {
     c=true;
    for(j=2;j<n;j++)
    {
        if(n%j==0)
        {
            c=false;
            break;
        }
      
    }if(c){
        arr.push(n);
    }
    }
    n3=n+n2
    n=n2
    n2=n3
    i++
}
console.log(`prime numbers in fibonacci series upto ${num} is ${arr}`)
sum=0;
for(x of arr)
{
    sum=sum+x;
}
console.log(`SUm of primes in fibo ${sum}`)