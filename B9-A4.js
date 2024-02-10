// Problem-1
function calculateMoney(numOfTicket){
    let taka=0;
    const ticketPrice = 120;
    const earnMoney = (numOfTicket * ticketPrice);
    const guardCost = 500;
    const numOfStaff = 8;
    const staffCost = 50;
    const spendMoney = (guardCost + (numOfStaff*staffCost));
    const remainningMoney = (earnMoney - spendMoney);
    taka = remainningMoney;

    if( remainningMoney >= 0){
        return taka;
    }
    else if(taka < 0){
        return "Invalid Number";
    }
}
let value =calculateMoney(130);
console.log(value);


// Problem-2
// function checkName(str) {
//     const lastChar = str[str.length - 1];
//     const badChar = ['a', 'y', 'i', 'e', 'o', 'u', 'w', 'A', 'Y', 'I', 'E', 'O', 'U', 'W'];
//     const goodChar= ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','x','z','B','C','D','F','G','H','J','K','L','M','N','P','R','Q','S','T','V','X','Z']
//     if (badChar.includes(lastChar)) {
//         console.log('Bad Name');
//     } else if(goodChar.includes(lastChar)) {
//         console.log('Good Name');
//     }
//     else{
//         console.log("invalid")
//     }
// }
// checkName("siyam"); 


//Problem-3

// function deleteInvalids(arr) {
//     if( Array.isArray(arr)){
//     return arr.filter(item => typeof item === 'number' && !isNaN(item));
//     }
    
// }
// const aarray = ["1",{num:2},NaN];
// //const array = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
// const numbersOnly = deleteInvalids(aarray);

// console.log(numbersOnly);



// *********Problem-04*************
// const userInfo = {name: "kolimoddi", birthYear: 1999, siteName: "google"};

// function password(userInfo){
//     const password =  userInfo.siteName + '#' + userInfo.name + '@' +  userInfo.birthYear;
//     return password;
// }

// console.log(password(userInfo));



//**************Problem-5****************
// function monthlySavings(arr, livingCost){
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         let amount;
//         if(arr[i] >= 3000){
//             amount = arr[i] - (arr[i]*(20/100));
            
          
//         }
//          else {
//              amount = arr[i];
//          }
//        sum  = sum + amount;
//     }
    
//     sum = sum - livingCost;

//     if(sum >= 0){
//         return sum;
//     }
//     else if(sum < 0){
//         return"earn more";
//     }
//     else{
//        return "invalid input";
//     }
        
// }

// const monthlyEarning = 100;
// const monthlyCost = [ 900 , 2700 , 3400];
// console.log(monthlySavings(monthlyEarning, monthlyCost));




