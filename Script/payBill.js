        document.getElementById('pay-Add_Money').addEventListener('click', function(){

          const bankSelect = document.getElementById('pay-bank_select').value;
          if(bankSelect == "Select bank"){
            alert("Please Select a Bank!");
            return;
          }

          const bankAcNumber = document.getElementById('pay-bank_Ac_Number').value;
          if(bankAcNumber.length != 11){
            alert("Invalid Account Number!")
            return;
          }

          const addAmount = document.getElementById('pay-add_Amount').value;
          
          const Balance = document.getElementById('balance');
          const newBalance = Balance.innerText;

          const addedNewBalance = Number(newBalance) - Number(addAmount);
          if(addedNewBalance < 0){
            alert("Invalid Amount!")
            return;
          }
          
          const pinNumber = document.getElementById('pay-pin_Number').value;
          if(pinNumber === "1234"){
            alert("Pay Bill Successful!");
            Balance.innerText = addedNewBalance;
          } else{
            alert('Invalid Pin Number');
            return;
          }

        });