document.getElementById('transfer_money_btn').addEventListener('click', function(){
        
        const transferMoneyNum = document.getElementById('transfer_money_num').value;
        if(transferMoneyNum.length != 11){
          alert('Invalid Account Number!')
          return;
        }

        const transferAmount = document.getElementById('transfer_amount').value;

        const Balance = document.getElementById('balance');
        const newBalance = Balance.innerText;

        const tranferBalance = Number(newBalance) - Number(transferAmount);
        if(tranferBalance < 0 && transferAmount == 0){
          alert('Invalid Amount!')
          return;
        }

        const pinNumber = document.getElementById('pin_Number').value;
          if(pinNumber === "1234"){
            alert("Transfer Money Successful!");
            Balance.innerText = tranferBalance;
          } else{
            alert('Invalid Pin Number');
            return;
          }
        
      });