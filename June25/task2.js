// ip:-"hello world" outuput=> dlrow olleh
str="hello world"
c=1
for(i of str)
{
    if(i==" ")
    {
       
        break
    }
    c++
}

res=""
count=0
for(i=str.length-1;i>=0;i--)
{
  
    if(count==c)
    {
        res+=" "
    }
    // res=res+str[i]
     if (str[i]!= " ") {
        res += str[i];
    }
   
    count++
    
}
console.log(res)