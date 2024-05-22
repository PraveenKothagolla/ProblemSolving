const prompt=require("prompt-sync")()
let rows=+prompt("enter rows")
for(i=1;i<=rows;i++)
    {
        s=""
        sum=0
        for(j=1;j<=i;j++)
            {
                s=s+j+" "
                sum=sum+j
            }
            console.log(`${s} ${sum}`)
    }