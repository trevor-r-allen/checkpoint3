import { ProxyState } from "../AppState.js"
import Task from "../Models/Task.js"
import { saveState } from "../Utils/localStorage.js"

class TasksService {
  constructor(){
    console.log("Tasks Service constructor")
    ProxyState.on("tasks", saveState)
  }

  createTask(newTask){
    let tasks = ProxyState.tasks
    tasks.push(new Task(newTask))
    ProxyState.tasks = tasks
    console.log(ProxyState.tasks)
  }

  deleteTask(taskId){
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != taskId)
  }

  updateComplete(taskId, bool){
    console.log(ProxyState.tasks)
    let taskIndex = ProxyState.tasks.findIndex(task => task.id == taskId)
    ProxyState.tasks[taskIndex].complete = bool
    let task = ProxyState.tasks[taskIndex]
    console.log(task)
  }
}

export const tasksService = new TasksService()