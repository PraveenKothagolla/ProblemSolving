const prompt=require("prompt-sync")()
let num=prompt("enter a number")
s=""
dup=""
unique=""
var largestDup;
var largestUnique;

for(i of num)
{
    if(!s.includes(i))
        {
            s=s+i
        }
}

for(j of s)
    {
        c=0
        for(t of num)
            {
                if(j==t)
                    {
                        c++
                    }
                   
            }
            if(c>1)
                {
                    dup=dup+j
                }
                else{
                    unique=unique+j
                }
    }
// console.log(dup)
// console.log(unique)
console.log(unique)
console.log(dup)
largestUnique=unique[0]
largestDup=dup[0]
for(q of unique)
{
    if(q>largestUnique)
    {
        largestUnique=q
    }
}
// console.log(smallestUnique)
// smallestDup=dup[0]
for(w of dup)
    {
        if(w>largestDup)
            {
                largestDup=w
            }
    }
    result=Number(largestUnique)+Number(largestDup)
    console.log( `sum of largest unique and largest dup = ${result}`)