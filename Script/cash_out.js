document.getElementById('cash_out_btn').addEventListener('click', function(){
            // agent number
            const cashOutAgentNum = document.getElementById('cash_out_agent_num').value;
            if(cashOutAgentNum.length !=11){
                alert("Invalid Agent Number");
                return;
            }
            
            // amount
            const cashOutAmount = document.getElementById('cash_out_amount').value;

            // balance
            const cashOutBalance = document.getElementById('balance');
            const newBalance = cashOutBalance.innerText;

            // calculate new Balance
            const cashoutNewBAlance = Number(newBalance) - Number(cashOutAmount);
            if(cashoutNewBAlance < 0){
                alert("Invalid Amount!")
                return;
            }

            // pin
            const cashOutPin = document.getElementById('cash_out_pin').value;
            if(cashOutPin === '1234'){
                alert("Cash Out Successful!");
                cashOutBalance.innerText = cashoutNewBAlance;

            } else{
                alert("Invalid Pin!");
                return;
            }
        });