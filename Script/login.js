      document.getElementById('loginBtn').addEventListener('click', function(){

        // get the mobile number
        const mobileNumberArea = document.getElementById('mobileNumber').value;
        mobileNumber.value = '';

        // get the pin
        const pinArea = document.getElementById('pin').value;
        pin.value = '';
        
        // Match the mobile number and pin with the stored values
        if(mobileNumberArea === '01715257515' && pinArea === '7788'){

          // Redirect to dashboard.html
          alert("Login Successful!!")
          window.location.assign("./html_Files/homepage.html")
        } else {

          // Show an alert for invalid credentials
          alert('Invalid mobile number or pin. Please try again.');
          return;
        }
        
      });