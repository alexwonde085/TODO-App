
const taskformInput = document.getElementById('form');
const taskName = document.getElementById('taskname');
const description = document.getElementById('description');
const assignTo = document.getElementById('assignto');
const dDate = document.getElementById('dueDate');
const select = document.getElementById('selection');
const message = document.getElementsByClassName('message');
const icon = document.querySelector('i');
const sucess = document.getElementsByClassName('sucess');
const error = document.getElementsByClassName('error');
const button = document.getElementById('submit');
const tl = document.querySelector('#tasksList');
const btns = document.getElementsByClassName('btn');
const card = document.getElementById('tasksList');
const clearAll = document.getElementById("clear-all");

const ntask = new TaskManager();

button.addEventListener('click', (e) =>{
  e.preventDefault();
const isValid = validFormFieldInput();
  if(isValid){

    ntask.addTask(taskName.value, description.value, assignTo.value, select.value, dDate.value);
    ntask.render();
    
    taskformInput.reset(); //Clear form
    ntask.save();
  }
});

function validFormFieldInput(){
let isValid = true;
  //validate taskName
  if(taskName.value === ""){
      taskName.style.borderColor = 'red';
      message[0].style.visibility = 'visible';
      message[0].style.color = 'red';
      message[0].innerText = 'Task Name cannot be blank';
      error[0].style.visibility = 'visible';
      error[0].style.color = 'red';
      isValid = false;
   }
  else {
      taskName.style.borderColor = '';
      error[0].style.visibility = 'hidden';
      message[0].style.visibility = 'hidden';
  }

  //validate description
  if(description.value === ""){
    description.style.borderColor = 'red';
    message[1].style.visibility = 'visible';
    message[1].style.color = 'red';
    message[1].innerText = 'Description cannot be blank';
    error[1].style.visibility = 'visible';
    error[1].style.color = 'red';
    isValid = false;
}
else {
  description.style.borderColor = '';
  error[1].style.visibility = 'hidden';
  message[1].style.visibility = 'hidden';
}

//validate Assignto
if(assignTo.value === ""){
  assignTo.style.borderColor = 'red';
  message[2].style.visibility = 'visible';
  message[2].style.color = 'red';
  message[2].innerText = 'AssignTo cannot be blank';
  error[2].style.visibility = 'visible';
  error[2].style.color = 'red';
  isValid = false;
}
else {
  assignTo.style.borderColor = '';
  error[2].style.visibility = 'hidden';
  message[2].style.visibility = 'hidden';
}

//validate status
if(select.value === "Select Status"){
  select.style.borderColor = 'red';
  message[3].style.visibility = 'visible';
  message[3].style.color = 'red';
  message[3].innerText = 'Status cannot be blank';
  error[3].style.visibility = 'visible';
  error[3].style.color = 'red';
  isValid = false;
}
else {
  select.style.borderColor = '';
  error[3].style.visibility = 'hidden';
  message[3].style.visibility = 'hidden';
}

//validate date
if(dDate.value === ""){
  dDate.style.borderColor = 'red';
  message[4].style.visibility = 'visible';
  message[4].style.color = 'red';
  message[4].innerText = 'Date cannot be blank';
  error[4].style.visibility = 'visible';
  error[4].style.color = 'red';
  isValid = false;
}
else {
  dDate.style.borderColor = '';
  error[4].style.visibility = 'hidden';
  message[4].style.visibility = 'hidden';
}
  return isValid;
}

tl.addEventListener('click', (event) => { 
    //Update Status
    let et = event.target.classList[1];
    if (et==("done-button")) {

      let parentTask = event.target.parentElement.parentElement;
      let header = parentTask.getElementsByClassName('card-header')[0].innerText;
      let taskId = Number(header.split(" ")[1]);
      ntask.tasks[taskId-1].status = "Done";
      const done = document.getElementById('markAsDone');
      done.style.visibility = 'hidden';
      ntask.save();
      ntask.render();
    } 
    // Delete Task
    if (event.target.classList[1]==("delete-button")) {
      let parentTask = event.target.parentElement.parentElement;
      let header = parentTask.getElementsByClassName('card-header')[0].innerText;
      let taskId = Number(header.split(" ")[1]);
      ntask.tasks.pop(ntask.tasks[taskId-1]);
      ntask.save();
      ntask.render();
    }  
});

//Clear local storage
    clearAll.addEventListener("click", () => {
      localStorage.clear();
      location.reload();
    });




   