// Problem-1
// function calculateMoney(numOfTicket){
//     const ticketPrice = 120;
//     const earnMoney = (numOfTicket * ticketPrice);
//     const guardCost = 500;
//     const numOfStaff = 8;
//     const staffCost = 50;
//     const spendMoney = (guardCost + (numOfStaff*staffCost));
//     const remainningMoney = (earnMoney - spendMoney);
//     return remainningMoney;
// }
// let value =calculateMoney(100);
// console.log(value);


// Problem-2
// function checkName(str) {
//     const lastChar = str[str.length - 1];
//     const badChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w', 'A', 'Y', 'I', 'E', 'O', 'U', 'W'];
//     if (badChar.includes(lastChar)) {
//         console.log('Bad word');
//     } else {
//         console.log('Good word');
//     }
// }
// checkName("SalmanI"); 


//Problem-3
//const array = {num: [ 1 , 2 , 3 ]};
function deleteInvalids(arr) {
    return arr.filter(item => typeof item === 'number' && !isNaN(item));
}

const array = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const numbersOnly = deleteInvalids(array);

console.log(numbersOnly);






