const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const repassword= document.getElementById('repassword');


function error(input,message){
    input.classList='form-control is-invalid';
    const div=input.nextElementSibling;
    div.innerText=message;
    div.classList='invalid-feedback';

}

function success(input){

    input.classList='form-control is-valid';

}


function valiatedEmail(input){
    const re=/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
    

    if(re.test(input.value)){
        success(input);
    }
    else{
        error(input,'hatali giriş');
    }

}



function checker(inputs){
    inputs.forEach(function(input){
    if(input.value==''){
        error(input,`${input.id} is required.`);
    }
    else{
        success(input);
    }
})
}

function checkLenght(input,min,max){
    if(input.value.length<min){
        error(input,`${input.id} en az ${min} karakter olmalidir`);
    }else if(input.value.length > max){
    error(input,`${input.id} en fazla ${max} karakter olmalidir`);
    }
    else{
        success(input);
    }
}

function checkNumber(input){
    var exp = /^\d{10}$/;
    if(!exp.test(input.value)){
        error(input,'10 rakamli bir numara olmalidir');
    }
}

function checkPassword(input1,input2){
    
    if(input1.value!=input2.value){
        error(input2,'lütfen ayni şifreyi giriniz');
    }
}

form.addEventListener('submit',function(e){
    e.preventDefault();

    checker([username,email,password,repassword,number]);
    valiatedEmail(email);
    checkLenght(username,7,15);
    checkLenght(password,7,12);
    checkPassword(password,repassword);
    checkNumber(number);
});