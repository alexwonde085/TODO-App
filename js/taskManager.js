
const createTaskHtml = (id, tname, description, assignedTo, status, dueDate) => {
    const html = 
        `<div class="col-6">
                <div class="row row-cols-1 row-cols-md-3 mt-3 main">
                    <div class="col mb-3">
                        <div class="card h-100">
                            <div class="card-header"><p id="taskid" data-task-id=${id}>Task ${id}</p></div>
                            <div class="card-body">
                            <span id="doneStatus" class="text-white bg-danger text-right">${status}</span>
                                <ul>
                                    <li>Due: ${dueDate}</li> 
                                    <li>Task Name: ${tname} </li>
                                    <li>Description: ${description}</li>
                                    <li>Assign To: ${assignedTo}</li>
                                </ul>
                                ${status !== 'Done'?'<a id ="markAsDone" href="#" class="btn done-button">Mark As Done</a>':
                                ''}
                                 <a id="del" href="#" class="btn delete-button">Delete</a> 
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>`
    return html; 
};

class TaskManager{

    constructor(currentId=0){
       //Check if there is anything saved in local storage. If there is set this.tasks array to the contents in local storage
    // let savedTaskList = localStorage.getItem("savedList");
    // if (savedTaskList) {
    //   this.tasks = JSON.parse(savedTaskList);
    //   this.render();
    //   this.currentId = this.tasks.length;
    //}
        //If nothing is stored in local storage, set this.tasks array to an empty array.
   // else {
      this.tasks = [];
      this.currentId = currentId;
   // }
}
     addTask(tname, desc, ass, status = "TODO", dDate){
            this.currentId ++;
            this.tasks.push({id:this.currentId, 
            name:tname, description:desc, 
            assignedTo:ass, status:status, 
            dueDate:dDate});
        return this.tasks;
    }
    render(){
        let tasksHtmlList = [];
         for(let i = 0; i < this.tasks.length; i++) {
              //Date Format
            let date = new Date(this.tasks[i].dueDate);
            date.setDate(date.getDate()+1);
            let formattedDate = date.toLocaleDateString();
            let taskHtml = createTaskHtml(this.tasks[i].id, this.tasks[i].name,
                this.tasks[i].description,this.tasks[i].assignedTo, 
                this.tasks[i].status,formattedDate);
            tasksHtmlList.push(taskHtml);
        }
        let tasksHtml = tasksHtmlList.join('');
        document.getElementById('tasksList').innerHTML = tasksHtml;
    }
    //Save to local storage
    save(){
        localStorage.setItem("savedList", JSON.stringify(this.tasks));
    }

getTaskById(taskId) {
    let foundTask;
    for (let i = 0; i < this.tasks.length; i++) {
        
      if (this.tasks[i].Id == taskId) 
      foundTask = this.tasks[i];
    }
    return foundTask;
  }

 deletTask(taskId) {
    let newTasks = [];
    for (let i = 0; i < this.tasks.length; i++) {

      if (this.tasks[i].Id != taskId) {
        newTasks.push(this.tasks[i]);
      }
    }
    this.tasks = newTasks;
  }
}
//Uncomment For unit testing
    module.exports = {
        TaskManager: TaskManager
    }