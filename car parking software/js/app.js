 let hours=Number(prompt("please enter number of hours","")); 
                let days = Math.trunc(hours / 24);
                let hoursRemain = hours % 24;
                let Amount = 0;
                
                Amount =  Amount + (days * 15);

                 if(hoursRemain <= 5){
                     Amount = Amount + hoursRemain;
                 }else{
                     Amount = Amount + 5;
                     hoursRemain = hoursRemain - 5;
                     Amount = Amount + (hoursRemain * 0.5);
                 }
