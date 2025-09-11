
function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>Hospital Management System OTP Login</h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        SecureToken : "77d8df5d-deb7-4b23-9f92-d4374be0afef",
        To : email.value,
        From : "movies4kuhdhdr@gmail.com",
        Subject : "HMS VERIFICATION CODE FOR LOGIN",
        Body : emailbody
    }).then(

      message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);

       
            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');

            otp_btn.addEventListener('click',()=>{
            
                if(otp_inp.value == otp_val){
                    window.location.assign("dashboard.php");
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }
      }
    );

}