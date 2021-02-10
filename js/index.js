
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
const markAsDone = document.getElementsByClassName('todo');

const ntask = new TaskManager();

button.addEventListener('click', (e) =>{
  e.preventDefault()

 validFormFieldInput()
  
  ntask.addTask(taskName.value, description.value, assignTo.value, select.value, dDate.value);
  ntask.render();
  
  taskformInput.reset(); //Clear form

});

function validFormFieldInput(){
    
  //validate taskName
  if(taskName.value === ""){
      taskName.style.borderColor = 'red';
      message[0].style.visibility = 'visible';
      message[0].style.color = 'red';
      message[0].innerText = 'Task Name cannot be blank';
      error[0].style.visibility = 'visible';
      error[0].style.color = 'red';
  }else if(taskName.value.length<3 && taskName.value.length>0){
      taskName.style.borderColor = 'red';
      message[0].style.visibility = 'visible';
      message[0].style.color = 'red';
      message[0].innerText = 'Task Name have atleast 3 character';
      error[0].style.visibility = 'visible';
      error[0].style.color = 'red';
  }
  else {
      taskName.style.borderColor = '';
      error[0].style.visibility = 'hidden';
      message[0].style.visibility = 'hidden';
      //sucess[0].style.visibility = 'visible';
      //sucess[0].style.color = 'green';
  }

  //validate description
  if(description.value === ""){
    description.style.borderColor = 'red';
    message[1].style.visibility = 'visible';
    message[1].style.color = 'red';
    message[1].innerText = 'Description cannot be blank';
    error[1].style.visibility = 'visible';
    error[1].style.color = 'red';
}
else {
  description.style.borderColor = '';
    error[1].style.visibility = 'hidden';
    message[1].style.visibility = 'hidden';
    // sucess[1].style.visibility = 'visible';
    // sucess[1].style.color = 'green';
}

//validate Assignto
if(assignTo.value === ""){
  assignTo.style.borderColor = 'red';
  message[2].style.visibility = 'visible';
  message[2].style.color = 'red';
  message[2].innerText = 'AssignTo cannot be blank';
  error[2].style.visibility = 'visible';
  error[2].style.color = 'red';
}
else {
  assignTo.style.borderColor = '';
  error[2].style.visibility = 'hidden';
  message[2].style.visibility = 'hidden';
  // sucess[2].style.visibility = 'visible';
  // sucess[2].style.color = 'green';
}

//validate status
if(select.value === "Select Status"){
  select.style.borderColor = 'red';
  message[3].style.visibility = 'visible';
  message[3].style.color = 'red';
  message[3].innerText = 'Status cannot be blank';
  error[3].style.visibility = 'visible';
  error[3].style.color = 'red';
}
else {
  select.style.borderColor = '';
  error[3].style.visibility = 'hidden';
  message[3].style.visibility = 'hidden';
  // sucess[3].style.visibility = 'visible';
  // sucess[3].style.color = 'green';
}

//validate date
if(dDate.value === ""){
  console.log(dDate.value);
  dDate.style.borderColor = 'red';
  message[4].style.visibility = 'visible';
  message[4].style.color = 'red';
  message[4].innerText = 'Date cannot be blank';
  error[4].style.visibility = 'visible';
  error[4].style.color = 'red';
}
else {
  dDate.style.borderColor = '';
  error[4].style.visibility = 'hidden';
  message[4].style.visibility = 'hidden';
  // sucess[4].style.visibility = 'visible';
  // sucess[4].style.color = 'green';
}

  return false;
}

tl.addEventListener('click', (event) => { 
  
    if (event.target.classList[1]==("done-button")) {

      let parentTask = event.target.parentElement;
      let taskId = Number(parentTask.firstChild.dataset.taskId);
      let task = newTask2.getTaskById(taskId);
      task.status = "Done";
      task.status.innerText = "Done";
      //event.target.style.visibility = 'hidden';
      //markAsDone.innerText = "Status: DONE";
      console.log(parentTask);
    } 

});


// let selected1 = event.target;
//       let selectContainer = selected1.parentElement;

//     if (selected1.classList.contains("done-button")) {
//       let status = selectContainer.getElementsByClassName("status")[0];
//       selected1.innerText = "Done";
//       //selected1.style.visibility = 'hidden';
//       markAsDone.innerText = "Status: DONE";
      
//     } 






