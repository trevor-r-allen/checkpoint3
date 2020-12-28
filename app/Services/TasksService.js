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
    this.updateTaskCount(newTask.listId)
    ProxyState.tasks = tasks
  }

  deleteTask(taskId, listId){
    ProxyState.tasks = ProxyState.tasks.filter(task => task.id != taskId)
    this.updateTaskCount(listId)
  }

  updateComplete(taskId, listId, bool){
    let taskIndex = ProxyState.tasks.findIndex(task => task.id == taskId)
    ProxyState.tasks[taskIndex].complete = bool
    this.updateTaskCount(listId)
  }

  updateTaskCount(listId){
    let listIndex = ProxyState.lists.findIndex(list => list.id == listId)
    let listTasks = ProxyState.tasks.filter(task => task.listId == listId)
    ProxyState.lists[listIndex].tasksTotal = listTasks.length
    ProxyState.lists[listIndex].tasksComplete = listTasks.filter(task => task.complete).length
    ProxyState.lists = ProxyState.lists
  }
}

export const tasksService = new TasksService()