const form = document.getElementById('form');
const taskName = document.getElementById('taskname');
const description = document.getElementById('description');
const assignTo = document.getElementById('assignto');
const status = document.getElementById('status');
const date = document.getElementById('date');

form.addEventListener('submit', (e) =>{
  e.preventDefault();

  checkInputs();
});

function checkInputs(){
  // get the values from the input.
  const taskNameValue = taskName.value.trim();
  const descriptionValue = description.value.trim();
  const assignToValue = assignTo.value.trim();
  const statusValue = status.value.trim();
  const dateValue = date.value.trim();

  if(taskNameValue === ''){
    //show error
    //add error class
    setErrorFor(taskName, 'Task name can not be blank');
  }else{
    //add success class
    setSuccessFor(taskName);
  }

  if(descriptionValue === ''){
    setErrorFor(description, 'Description can not be blank');
  }else{
    setSuccessFor(description);
  }

  if(assignToValue === ''){
    setErrorFor(assignTo, 'Assignto can not be blank');
  }else{
    setSuccessFor(assignTo);
  }

  if(statusValue.localeCompare('Choose Status') !== 0){
    setErrorFor(status, 'Status can not be blank');
  }else{
    setSuccessFor(status);
  }
}

function setErrorFor(input, message){
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.className = 'form-control error';
}

function setSuccessFor(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

function isEmail(email){
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
