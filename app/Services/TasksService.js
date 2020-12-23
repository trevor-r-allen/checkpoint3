import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/localStorage.js"

class TasksService {
  constructor(){
    console.log("Tasks Service constructor")
    ProxyState.on("tasks", saveState)
  }

  createTask(newTask){
    console.log(newTask)
    let tasks = ProxyState.tasks
    tasks.push(new Task(newTask))
    ProxyState.tasks = tasks
  }

  deleteTask(taskId){
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != taskId)
  }
}

export const tasksService = new TasksService()