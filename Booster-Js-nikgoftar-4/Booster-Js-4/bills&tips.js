/*
John and his family went on a holiday and visited three different restaurants. The bills were: $124, $48, $268
To tip the waiter a fair amount, John created a simple tip calculator as a function. He likes to tip:
 - 20% of the bill when the bill is less than $50
 - 15% when the bill is between $50 and $200
 - 10% if the bill is more than $200
In the end, John would like to have two arrays:

An array containing all three tips (one for each bill).
An array containing all three final paid amounts (bill + tip).
*/


let bill= [124, 48, 268]
let tips =[];
let totalPaid=[];
function calculateTip(bill) {
    
bill.forEach((el)=>{
    let tip;
    if (el <50){
       tip = Math.round(el * 0.20);
    } else if(50<el<200){
       tip = Math.round(el* 0.15);
    }else if (el>200){
       tip = Math.round(el * 0.10)
    }
    tips.push(tip).toFixed(1);
    totalPaid.push(el+tip)
})


}
calculateTip(bill);  
console.log("Tips:", tips);  
console.log("Total Paid:", totalPaid); 

