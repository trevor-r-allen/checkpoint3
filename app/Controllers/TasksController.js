import { tasksService } from "../Services/TasksService.js"


export default class TasksController{
  constructor(){

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

  deleteTask(taskId, listId){
    if(window.confirm("Are you sure?")){
      tasksService.deleteTask(taskId, listId)
    }
  }

  updateComplete(taskId, listId){
    //@ts-ignore
    if (document.getElementById(`check${taskId}`).checked){
      tasksService.updateComplete(taskId, listId, true)
    }
    else{
      tasksService.updateComplete(taskId, listId, false)
    }
  }
}