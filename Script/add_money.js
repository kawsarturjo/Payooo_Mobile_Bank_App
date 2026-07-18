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
            alert("0 ammount not allowed!")
            return;
          }
          
          const pinNumber = document.getElementById('pin_Number').value;
          if(pinNumber === "1234"){
            alert("Add Money Successful!");
            Balance.innerText = addedNewBalance;
          } else{
            alert('Invalid Pin Number');
            return;
          }

        });