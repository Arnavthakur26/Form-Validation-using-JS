let username = document.getElementById('username');
let email = document.getElementById('email');
let number = document.getElementById('number');
let namefeedback = document.getElementById('username-feedback');
let emailfeedback = document.getElementById('email-feedback');
let numberfeedback = document.getElementById('number-feedback');
let submit=document.getElementById('submit');
let alertstatus=document.getElementById('alert');
let nameflag,emailflag,numberflag=false;

username.addEventListener('blur', () => {
    let regex = /([a-zA-Z0-9])/;
    let str = username.value;
    if (regex.test(str)) {
        username.classList.add('is-valid');
        username.classList.remove('is-invalid');
        namefeedback.classList.add('valid-feedback');
        namefeedback.classList.remove('invalid-feedback');
        namefeedback.innerText='Looks Good!';
        nameflag=true;
    } else {
        username.classList.add('is-invalid');
        username.classList.remove('is-valid');
        namefeedback.classList.add('invalid-feedback');
        namefeedback.classList.remove('valid-feedback');
        namefeedback.innerText='Please Enter Correct Name';
    }
})
email.addEventListener('blur', () => {
    let regex = /^([_\.\-a-zA-Z0-9]+)@([_\.\-a-zA-Z0-9]+)\.([a-zA-Z]){2,8}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.add('is-valid');
        email.classList.remove('is-invalid');
        emailfeedback.classList.add('valid-feedback');
        emailfeedback.classList.remove('invalid-feedback');
        emailfeedback.innerText='Looks Good!';
        emailflag=true;
    } else {
        email.classList.add('is-invalid');
        email.classList.remove('is-valid');
        emailfeedback.classList.add('invalid-feedback');
        emailfeedback.classList.remove('valid-feedback');
        emailfeedback.innerText='Please Enter Correct Name';
    }
})
number.addEventListener('blur', () => {
    let regex = /^([0-9]){10}$/;
    let str = number.value;
    if (regex.test(str)) {
        number.classList.add('is-valid');
        number.classList.remove('is-invalid');
        numberfeedback.classList.add('valid-feedback');
        numberfeedback.classList.remove('invalid-feedback');
        numberfeedback.innerText='Looks Good!';
        numberflag=true;
    } else {
        number.classList.add('is-invalid');
        number.classList.remove('is-valid');
        numberfeedback.classList.add('invalid-feedback');
        numberfeedback.classList.remove('valid-feedback');
        numberfeedback.innerText='Please Enter Correct Name';
    }
})

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    if(nameflag && emailflag && numberflag){
        alertstatus.classList.add('show');
        alertstatus.innerHTML+=`<strong>Success!</strong> Your form is submitted.`;
    }
    else{
        alertstatus.classList.add('show','alert-danger');
        alertstatus.innerHTML+=`<strong>Error!</strong> Please check the incorrect fields. `;
    }
})