const prompt=require("prompt-sync")();
let num=+prompt("enter a number");
for(i=num-1;i>=2;i--)
{
     for(j=2;j<i;j++)
     {
        c=true;
        if(i%j==0)
        {
            c=false;
            break;
        }
     }if(c)
     {
        lprime=i;
        break;
     }
}
for(x=num+1;x>num;x++)
{  for(t=2;t<x;t++)
    {
       c=true;
       if(x%t==0)
       {
           c=false;
           break;
       }
    }if(c)
    {
       rprime=t;
       break;
    }

}
diff=num-lprime;
diff1=rprime-num;
if(diff==diff1)
{
    console.log("null");
}
else if(diff>diff1)
{
    console.log(`nearest prime is ${rprime}`);
}
else{
    console.log(`nearest prime is ${lprime}`);
}