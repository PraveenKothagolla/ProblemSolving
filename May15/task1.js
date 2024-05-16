const prompt=require(`prompt-sync`)();
arr=[]
let len=+prompt("enter length of the array")
for(i=1;i<=len;i++)
    {
         arr.push(+prompt("enter a number"))
    }
s=" "
new_arr=[]
dup_arr=[]

for(i of arr)
    {
        if(!s.includes(i))
            {
                s=s+i
               new_arr.push(i)
            }

            else{
                dup_arr.push("_")

            }
    }

    // for(i=0;i<arr.length;i++)
    //     {
    //         for(j=0;j<new_arr;j++)
    //             {
    //                 if(arr[i]==new_arr[j])
    //                     {

    //                     }
    //             }
    //     }

  let resarray=new_arr.concat(dup_arr)
  console.log(resarray)

    // console.log(arr)
    // console.log(dup_arr)
    // console.log(new_arr)