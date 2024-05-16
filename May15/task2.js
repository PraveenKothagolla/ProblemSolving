// Input: nums = [3,2,2,3]
// Input2: val = 3
// Output:[2,2,,]
// Explanation: Insert under scores which are equal to occurences of input 2 value
const prompt=require(`prompt-sync`)();
arr=[]
let len=+prompt("enter length of the array")
for(i=1;i<=len;i++)
    {
         arr.push(+prompt("enter a number"))
    }
// let num=[3,2,2,3]
console.log(arr)
let input2=+prompt("enter a number")
let res=[]
for(i of arr)
    {
        if(i==input2)
            {
                res.push("_")
            }
        else{
            res.push(i)
        }
    }
    console.log(res)