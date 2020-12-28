import { ProxyState } from "../AppState.js"
import { generateId } from "../Utils/GenerateId.js"

export default class List {
  constructor({title, color, id, tasksTotal, tasksComplete}) {
    this.title = title
    this.color = color
    this.id = id || generateId()
    this.tasksTotal = tasksTotal
    this.tasksComplete = tasksComplete
  }
  get Template() {
    return /*html*/`
    <div class="card col-6 col-md-4">
      <h4 class="card-title text-center" style="background-color:${this.color}">${this.title}<br>${this.tasksComplete}/${this.tasksTotal} <button type="button" class="btn btn-danger"
          onclick="app.listsController.deleteList('${this.id}'); app.tasksController. deleteTask('${this.id}')">Delete</button></h4>
      
      <div class="card-body">
          <form onsubmit="app.tasksController.createTask('${this.id}')">
            <div class="form-inline">
                <div class="form-row">
                  <label for="taskDescription">Task Description</label>
                  <input type="text" name="taskDescription" id="taskDescription" class="form-control" placeholder="Task description" aria-describedby="helpId" minlength="3" maxlength="50" pattern=".{3,50}" required>
                  <button type="submit" class="btn btn-success p-1">Add</button>
                </div>
            </div>
          </form>
        <p class="card-text">Tasks: </p>
        <div class="row">
            ${this.Tasks}
        </div>
      </div>
    </div>
    `
  }
get Tasks() {
  let template = ""
  let tasks = ProxyState.tasks.filter(task => task.listId == this.id)
  tasks.forEach(task => template += task.Template)
  console.log(template)
  return template
}
}