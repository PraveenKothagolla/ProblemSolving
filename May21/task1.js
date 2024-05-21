str="HelloWorld"
s=""
for(i=0;i<str.length;i++){

    {
        if(str.charCodeAt(i)<=90)
            { 
                s=s+str[i]
            }
    }}

 
str1=str.toLowerCase()
str2=str1.split("").sort()
res=""
count=0
for(i of str2)
    {
        if(!res.includes(i))
            {
                res=res+i
            }
    }
console.log(res)


for(i of res)
    {
        count=0
        for(j of str2)
            {
                if(i==j)
                    {
                      count++
                     }
         }
         if(s.includes(i.toUpperCase()))
         console.log(i.toUpperCase(),count)
        else
        console.log(i,count)
        }







//         for(x=0;x<result.length;x++)
//                 {
                    
//                     if(i==result[x]){
//                         a=i.toUppeCase()
//                         console.log(`${a} - ${count}`)
//                     }
//                     else{
//                         console.log(`${i} - ${count}`)
//                     }

//                }
           
//     }