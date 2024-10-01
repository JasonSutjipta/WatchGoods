// hamburger menu
const sidenav = document.querySelector(".nav-menu");

document.querySelector("#hamburger").onclick = () => {
  sidenav.classList.toggle("active");
};


// menghilangkan sidebar
const hamburger = document.querySelector('#hamburger');
document.addEventListener('click',function(e){
    if(!hamburger.contains(e.target) && !sidenav.contains(e.target)){
        sidenav.classList.remove('active');
    }
});

function validate(){
    var fullname = document.getElementById("fullname").value
    var email =document.getElementById("email").value
    var country =document.getElementById("region")
    var message =document.getElementById("textarea").value
    var agree =document.getElementById("agreement")
    var e=document.getElementById("region")
    var ddl=document.getElementById("region")

    
    if(fullname.length <  5 ){
        alert("Fullname Must Be > 5")
    }
    else if(email.endsWith("@gmail.com") == false){
        alert("Email must be gmail")
    }
    else if(ddl.value==""){
        alert("you must pick your country");

    }

    else if(message.length < 10 ){
        alert("Message Must Be > 10")
    }

    else if(!agree.checked){
        alert("Must Agree")
    }
    else{
        alert("Form Submitted")
        document.contactusform.submit();
        // document.contactusform.reset();
    }
}