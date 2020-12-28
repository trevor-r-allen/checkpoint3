// import { ProxyState } from "../AppState.js"
import { tasksService } from "../Services/TasksService.js"

// function _drawTasks(){
// let template = ""
// ProxyState.tasks.forEach(task => template += task.Template)
// document.getElementById("tasks").innerHTML = template
// }

export default class TasksController{
  constructor(){
    console.log("Tasks Controller constructor")
    // ProxyState.on("lists", _drawTasks)
    // ProxyState.on("tasks", _drawTasks)
    // _drawTasks()
  }

  createTask(listId){
    window.event.preventDefault()
    let form = window.event.target
    let newTask = {
      //@ts-ignore
      description: form.taskDescription.value,
      listId: listId
    }
      //@ts-ignore
    tasksService.createTask(newTask)
      //@ts-ignore
    form.reset()
  }

  deleteTask(taskId){
    if(window.confirm("Are you sure?")){
      tasksService.deleteTask(taskId)
    }
  }

  updateComplete(id){
    //@ts-ignore
    if (document.getElementById(`check${id}`).checked){
      tasksService.updateComplete(id, true)
    }
    else{
      tasksService.updateComplete(id, false)
    }
  }
}