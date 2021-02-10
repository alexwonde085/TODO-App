
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

const ntask = new TaskManager();

button.addEventListener('click', (e) =>{
  e.preventDefault()

 validFormFieldInput()
  
  ntask.addTask(taskName.value, description.value, assignTo.value, select.value, dDate.value);
  ntask.render();
  
  taskformInput.reset(); //Clear form
  ntask.save();

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
    //Update Status
    let et = event.target.classList[1];
    if (et==("done-button")) {

      let parentTask = event.target.parentElement.parentElement;
      let header = parentTask.getElementsByClassName('card-header')[0].innerText;
      let taskId = Number(header.split(" ")[1]);
      ntask.tasks[taskId].status = "Done";
      ntask.render();
      console.log(markAsDone[0]);
      markAsDone[0].style.visibility='hidden';
      
    } 
    // Delete Task
    if (event.target.classList[1]==("delete-button")) {
      let parentTask = event.target.parentElement.parentElement;
      let header = parentTask.getElementsByClassName('card-header')[0].innerText;
      
      let taskId = Number(header.split(" ")[1]);
      ntask.tasks.pop(ntask.tasks[taskId]);
      //ntask.tasks.slice(ntask.tasks[taskId]);
      localStorage.removeItem(taskId);
      ntask.save();//////
      ntask.render();

    }
});








