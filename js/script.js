// about navbar toggler

$(document).ready(function () {
  $(".navbar-toggler").click(function() {
    $(".navbar-toggler").toggleClass("change");
  });
});


// about sign up form content
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');


//  show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-group error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}

//  show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-group success';
}


// check email is valid
function checkEmail(input) {
  const em = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if(em.test(input.value.trim())){
    showSuccess(input);
  }else{
    showError(input, 'e-mail is not valid');
  }
}

// check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

// check input length
function checkLength(input, min, max) {
  if(input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`);
  }else if (input.value.length > max){
    showError(input, `${getFieldName(input)} must be at least ${max} characters`);
  }else{
    showSuccess(input);
  }
}

// check password match
function checkPasswordsMatch(input1, input2) {
  if(input1.value !== input2.value){
    showError(input2, 'Passwords do not match!');
  }
}

// get fieldName
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// event listeners
form.addEventListener('submit', function(e){
  e.preventDefault();

  checkRequired([name, email, username, password1, password2]);
  checkLength(name, 7,30);
  checkLength(username, 4,30);
  checkLength(email);
  checkLength(password 8,30);
  checkPasswordsMatch(password1,password2);
});
