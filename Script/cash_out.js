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
                
                const transactioHistory = document.getElementById('transactio_history');

            const newHistory = document.createElement('div');

            newHistory.innerHTML = `
              <div class="w-100.5 h-[71.5px] rounded-xl bg-white flex justify-between items-center pl-4 pr-4 mb-3">
          <div class="flex items-center gap-2">
          <div class="w-[45.5px] h-[45.5px] rounded-4xl bg-[#08080805] flex justify-center items-center">
            <img src="../assets/opt-1.png" alt="logo">
          </div>
          <div>
              <h2 class="text-[16px] text-[#08080870] font-semibold">Cash Out | ${cashOutAgentNum} ~ ${cashOutAmount} BDT</h2>
              <p class="text-[12px] text-[#08080870]">${new Date()}</p>
          </div>
          </div>

          <a href="#"><i class="fa-solid fa-ellipsis-vertical" style="color: rgb(0, 0, 0);"></i></a>
        </div>
            `;
            transactioHistory.append(newHistory);

            } else{
                alert("Invalid Pin!");
                return;
            }
        });