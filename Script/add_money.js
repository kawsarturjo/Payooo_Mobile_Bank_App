        document.getElementById('Add_Money').addEventListener('click', function(){

          const bankSelect = document.getElementById('bank_select').value;
          if(bankSelect == "Select bank"){
            alert("Please Select a Bank!");
            return;
          }

          const bankAcNumber = document.getElementById('bank_Ac_Number').value;
          if(bankAcNumber.length != 11){
            alert("Invalid Account Number!")
            return;
          }

          const addAmount = document.getElementById('add_Amount').value;
          
          const Balance = document.getElementById('balance');
          const newBalance = Balance.innerText;

          const addedNewBalance = Number(newBalance) + Number(addAmount);
          if(addAmount == 0){
            alert("0 Amount not allowed!")
            return;
          }
          
          const pinNumber = document.getElementById('pin_Number').value;
          if(pinNumber === "1234"){
            alert("Add Money Successful!");
            Balance.innerText = addedNewBalance;
            const transactioHistory = document.getElementById('transactio_history');

            const newHistory = document.createElement('div');

            newHistory.innerHTML = `
              <div class="w-100.5 h-[71.5px] rounded-xl bg-white flex justify-between items-center pl-4 pr-4 mb-3">
          <div class="flex items-center gap-2">
          <div class="w-[45.5px] h-[45.5px] rounded-4xl bg-[#08080805] flex justify-center items-center">
            <img src="../assets/opt-1.png" alt="logo">
          </div>
          <div>
              <h2 class="text-[16px] text-[#08080870] font-semibold">Add Money | ${bankSelect} | ${addAmount} BDT</h2>
              <p class="text-[12px] text-[#08080870]">${new Date()}</p>
          </div>
          </div>

          <a href="#"><i class="fa-solid fa-ellipsis-vertical" style="color: rgb(0, 0, 0);"></i></a>
        </div>
            `;
            transactioHistory.append(newHistory);
          } else{
            alert('Invalid Pin Number');
            return;
          }

        });