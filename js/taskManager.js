
const createTaskHtml = (id, tname, description, assignedTo, status, dueDate) => {
    const html = 
        `<div class="col-6">
                <div class="row row-cols-1 row-cols-md-3 mt-3 main">
                    <div class="col mb-3">
                        <div class="card h-100">
                            <div class="card-header">
                                Task ${id}
                            </div>
                            <div class="card-body">
                            <span class="todo text-white bg-danger text-right">${status}</span>
                                <ul>
                                    <li>Due: ${dueDate}</li> 
                                    <li>Task Name: ${tname} </li>
                                    <li>Description: ${description}</li>
                                    <li>Assign To: ${assignedTo}</li>
                                </ul>
                                <a id ="markAsDone" href="#" class="btn done-button">Mark As Done</a>
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
        this.tasks = [];
        this.currentId = currentId;
    }

     addTask(tname, desc, ass, status, dDate){
            this.tasks.push({id:this.currentId, 
            name:tname, description:desc, 
            assignedTo:ass, status:status, 
            dueDate:dDate});
            this.currentId ++;
    }

    render(){
        let tasksHtmlList = [];
         for(let i = 0; i < this.tasks.length; i++) {
        //    //Date Format
            let date = new Date();
            let fDate = new Intl.DateTimeFormat('en-US', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
            let formattedDate = fDate.format(date)
            let taskHtml = createTaskHtml(this.tasks[i].id, this.tasks[i].name,
                this.tasks[i].description,this.tasks[i].assignedTo, 
                this.tasks[i].status,formattedDate);
            tasksHtmlList.push(taskHtml);
        }

        let tasksHtml = tasksHtmlList.join('');
        document.getElementById('tasksList').innerHTML = tasksHtml;
    }

    save(){
        const tasksJson = JSON.stringify(this.tasks)
        
        const currentId = JSON.stringify(this.currentID)
        localStorage.setItem(currentId, tasksJson)
    }

    load(){

    }
}


