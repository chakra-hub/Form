const specialChars =/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

form_data=document.getElementById('form');
form_data.addEventListener('submit',(event)=>{
    event.preventDefault();
    fname=document.getElementById('fname').value;
    lname=document.getElementById('lname').value;
    email=document.getElementById('email').value;
    pword=document.getElementById('pword').value;
    cpword=document.getElementById('cpword').value;
    fname_check(fname);
    lname_check(lname);
    email_check(email);
    password_check(pword);
    confirm_password_check(cpword,pword);
})

function fname_check(fname){

    fname_msg=document.getElementById('fname-msg');
    fname_msg.removeAttribute('hidden');
    fname_msg.style.color='red'
    if(/\d/.test(fname) ||(specialChars.test(fname))){
        fname_msg.innerText="numbers & special characters are not allowed";
    }
    else if(fname.trim()==''){
        fname_msg.innerText="first name cannot be empty"; 
    }
    else{
        fname_msg.hidden="hidden";
    }
}

function lname_check(lname){

    lname_msg=document.getElementById('lname-msg');
    lname_msg.removeAttribute('hidden');
    lname_msg.style.color='red';
    if(/\d/.test(lname) || (specialChars.test(lname))){
        lname_msg.innerText="numbers & special characters are not allowed";
    }
    else if(lname.trim()==''){
        lname_msg.innerText="last name cannot be empty"; 
    }
    else{
        lname_msg.hidden="hidden";
    }
}

function password_check(pword){
    pword_msg=document.getElementById('pword-msg');
    pword_msg.removeAttribute('hidden');
    pword_msg.style.color='red';
    if(/\d/.test(pword) &&  ((specialChars.test(pword)))){
        pword_msg.style.color='green';
        pword_msg.innerText="Strong Password";
    }
    else if(pword.trim()==''){
        pword_msg.innerText="choose a password"; 
    }
    else{
        pword_msg.innerText="weak password (include numbers and special characters)";  
    }
    
}

function email_check(email){
    email_msg=document.getElementById('email-msg');
    email_msg.removeAttribute('hidden');
    email_msg.style.color='red';
    if(email.trim()==''){
        email_msg.innerText="email cannot be empty";
    }
    else{
        email_msg.hidden="hidden";
    }
}

function confirm_password_check(cpword,pword){
    cpword_msg=document.getElementById('cpword-msg');
    cpword_msg.removeAttribute('hidden');
    cpword_msg.style.color='red';    
    if(cpword.trim()=='' && (pword.trim()=='')){
        pword_msg.innerText="choose a password";
    }
    else if(cpword==pword){
        cpword_msg.style.color='green';
        cpword_msg.innerText="Both Password matched";
    }
    else{
        cpword_msg.innerText="both passwords are not matching";
    }
}