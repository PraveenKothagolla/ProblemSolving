const prompt=require("prompt-sync")()
let num=prompt("enter a number")
s=""
dup=""
unique=""
var smallestDup;
var smallestUnique;

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
smallestUnique=unique[0]
smallestDup=dup[0]
for(q of unique)
{
    if(q<smallestUnique)
    {
        smallestUnique=q
    }
}
// console.log(smallestUnique)
// smallestDup=dup[0]
for(w of dup)
    {
        if(w<smallestDup)
            {
                smallestDup=w
            }
    }
    result=Number(smallestUnique)+Number(smallestDup)
    console.log( `sum of smallest unique and smallest dup = ${result}`)