var tickets=
[
    {no:1, amount:100},
    {no:2, amount:120},
    {no:3, amount:180},
    {no:4, amount:200},
    {no:5, amount:100},
    {no:6, amount:180},
    {no:7, amount:119},
    {no:8, amount:90},
    {no:9, amount:100},
    {no:10, amount:185},
    {no:11, amount:145},
    {no:12, amount:220}
]
str = ``
tickets.forEach(function(value,index){
    // console.log(value,index);
    str=str+`
    <div class='col-xl-1' onclick="myfun(this)" for='${value.no}#${value.amount}'>${value.no}<br/>${value.amount}</div>`
})
// console.log(str);
document.getElementById("maindiv").innerHTML=str

arr1=[];  arr2=[]
function myfun(myvar)
{
    //  console.log(alert(1));
    // console.log(myvar);
    let ans =myvar.attributes.for.value
    // console.log(ans);
    let ans1=ans.split("#")
    console.log(ans1);

    let position =arr1.indexOf(ans1[0])
    if(position==-1)
    {
    arr1.push(ans1[0])   //to add value in ticket
    arr2.push(ans1[1])
    // console.log("Ticket added");
    message="Ticket added"
    }
    else
    {
        // console.log("Ticket already exist");
        message="Ticket already exist"
    }
    // console.log(arr1);
    // console.log(arr2);

    document.getElementById("message").innerHTML=message
    final_no=arr1.join(",")
    // console.log(final_no);
    document.getElementById("no").innerHTML=final_no

    final_amount=arr2.join("+")
    document.getElementById("amount").innerHTML=final_amount
    let total_amount = eval(final_amount)
    document.getElementById("amount").innerHTML=total_amount

    myvar.style.background="yellow"
}