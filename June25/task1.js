// [[1,2,3,4]4,5]  =>output=>[1,2,3,4,5]
arr=[9,7,7,[1,2,3,4],4,5,6]
newarr=[]
resarr=[]
for(i of arr)
{
    if(Array.isArray(i))
    {
       subarr=i
        
    }
    else
    {
        newarr.push(i)
    }
}
console.log(newarr)
console.log(subarr)
for(i of subarr)
{
   if(!newarr.includes(i))
   {
       resarr.push(i)
   }
}
for(i of newarr)
{
   if(!subarr.includes(i))
   {
       resarr.push(i)
   }
}
console.log(resarr)


