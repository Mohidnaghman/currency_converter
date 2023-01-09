import inquirer from "inquirer";


const USDtoPKR=228.43;
const PKRtoUsD=0.0044;
const Eutopkr=239.85;
const pkrtoEu=0.0042;
const EutoUsd=1.05;
const UsdtoEu=0.95;



let repeat=false;




async function Converter(){
 do{   let answer:{currencyFrom:string,currencyTo:string,Amount:number} =await inquirer.prompt([
        {
            name:"currencyFrom",
            type:"list",
            choices:['USD','PKR','EU'],
            message:"select from which currency you want to convert"
            
        },
            {
                name:"currencyTo",
                type:"list",
                choices:['USD','PKR','EU'],
                message:"select to which currency you want to convert"
                
            },{
                name:"Amount",
                type:"number",
                
                message:"Enter values: "
                
            }

        
    ])
    // console.log(answer.Amount);
    switch (answer.currencyFrom) {
        case 'USD':
            if (answer.currencyTo==='PKR') {
              let Amount=answer.Amount  * USDtoPKR
              console.log(Amount);
              
            }else if(
answer.currencyTo==='EU'
            ){ let Amount=answer.Amount  * UsdtoEu
            console.log(Amount);
            
            }
            else{
console.log(answer.Amount);

    }
            break;
    case 'PKR':
       
    if (answer.currencyTo==='USD') {
        let Amount=answer.Amount  * PKRtoUsD
        console.log(Amount);
        
      }else if(
answer.currencyTo==='EU'
      ){ let Amount=answer.Amount  * pkrtoEu
      console.log(Amount);
      
      }
      else{
console.log(answer.Amount);

}
break;
case 'EU':
    if (answer.currencyTo==='USD') {
        let Amount=answer.Amount  * EutoUsd
        console.log(Amount);
        
      }else if(
answer.currencyTo==='EU'
      ){ let Amount=answer.Amount  * Eutopkr
      console.log(Amount);
      
      }
      else{
console.log(answer.Amount);

}break;
    }
repeat=await Repeat(); 

}while(repeat==true)}
async function Repeat(
){
    let again=await inquirer.prompt([
      {  name:"repeat",
type:"list",
choices:['y','n'],
message:"Do you want to repeat"


    }
    ])
    return again.repeat==='y'?true:false
}
Converter();