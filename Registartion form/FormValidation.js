const validate=()=>{
    let name=document.getElementById("name").value
    if(name==null || name==""){
        document.getElementById("nameError").innerHTML="Please Enter Your Name"
        return 
    }
    else{
        document.getElementById("nameError").innerHTML=" "
    }
     let alpha=/^[A-Za-z]+$/
     if(!alpha.test(name)){
        document.getElementById("nameError").innerHTML="Please Enter the Alphabets only"
        return false
     }
     else{
        document.getElementById("nameError").innerHTML=""
     }

     let email=document.getElementById("email").value
     if(email==null || email==""){
        document.getElementById("emailError").innerHTML="Please Enter Your Email"
        return false
     }
     else{
        document.getElementById("emailError").innerHTML=""
     }

     let mail=/^[a-zA-Z0-9_]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
     if(!mail.test(email)){
        document.getElementById("emailError").innerHTML="Please Enter the correct email address"
        return false 
     }
     else{
        document.getElementById("emailError").innerHTML=""
     }

     let phone=document.getElementById("phoneNumber").value
     if(phone==null || phone==""){
        document.getElementById("phoneError").innerHTML="Please Enter Your Number"
        return false
     }
     else{
        document.getElementById("phoneError").innerHTML=""
     }
     
     let number=/^[0-9]{10,11}$/
     if(!number.test(phone)){
        document.getElementById("phoneError").innerHTML="Please Enter the correct input"
        return false
     }
     else{
        document.getElementById("phoneError").innerHTML=""
     }

     const subjectSelect=document.getElementById("subject").value
     if(subjectSelect=="" || subjectSelect=="sub"){
        document.getElementById("subjectError").innerHTML="Please Enter Your Subject"
        return false
     }
     else{
        document.getElementById("subjectError").innerHTML=""
     }


     const message=document.getElementById("message").value
     if(message==null || message==""){
        document.getElementById("messageError").innerHTML="Please Enter Your Message"
        return false
     }
     else{
        document.getElementById("messageError").innerHTML=""
     }
}